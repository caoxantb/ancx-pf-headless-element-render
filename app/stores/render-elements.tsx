import React from "react";
import { memo, useContext } from "react";
import elements from "../elements";
import { mergeDeep } from "../utilities/merge-deep";
import { enhanceElement } from "./enhance-element";
import { base64IDfromHex } from "../utilities/hex-to-base64";
import { getData } from "../api/";
import { checkPropertyKey } from "../utilities/check-property-key";
import {mainCss} from '../styles/main'
import { getCssText } from "../utilities/get-css-text";

interface IPageContext {
  elementStores?: Map<string, any>;
  pageData?: any;
}

interface IDataSourceContext {
  [key: string]: any;
}

export const PageContext = React.createContext<IPageContext>({});
export const DataSourceContext = React.createContext<IDataSourceContext>({});

export const renderChildren = (children: string[], elementStores: any) => {
  if (Array.isArray(children)) {
    return children.map((childId, idx) => {
      const elementStore = elementStores.get(childId);
      if (elementStore) {
        return (
          <ElementRendered store={elementStore} key={`${childId}-${idx}`} />
        );
      }
      return null;
    });
  }
};

export const renderPage = (pageData: any) => {
  const { items } = pageData;
  const elementStores = new Map();
  const bodyStore = items.find((item: any) => item.type === "Body");
  if (bodyStore) {
    items.forEach((item: any, idx: any) => {
      const { _id } = item;
      elementStores.set(_id, { _id, styleId: idx + 1, ...item, count: idx + 1 });
    });
    console.log(elementStores)
    const cssString = getCssText(elementStores, pageData)
    console.log(cssString)
    return (
      <>
        <style dangerouslySetInnerHTML={{
          __html: mainCss
        }}></style>
        <style dangerouslySetInnerHTML={{
          __html: cssString
        }}></style>
        <PageContext.Provider
          value={{
            elementStores,
            pageData,
          }}
        >
          <div className={`__pf __pf_${base64IDfromHex(bodyStore._id)}`}>
            <ElementRendered store={bodyStore} />
          </div>
        </PageContext.Provider>
      </>
    );
  }
  return <div>This page has no root</div>;
};

export const ElementRendered = ({ store }: any) => {
  const { type, children } = store;
  const { elementStores, pageData } = useContext(PageContext);

  const EnhancedElement = memo(
    type === "Column" ? elements[type] : enhanceElement(elements[type])
  );

  const defaultProps = elements[type]?.defaultProps || {};

  store.data = mergeDeep(defaultProps, store.data);

  if (store.hasOwnProperty("dataSourceId")) {
    const storeDataSource: any = pageData.datasources.find(
      (dataSource: any) => dataSource.id === store.dataSourceId
    );
    let dataset: any;

    switch (storeDataSource?.type) {
      case "contentful":    
        const dataContentful = getData(storeDataSource.type, {
          spaceId: storeDataSource.spaceId,
          accessToken: storeDataSource.accessToken,
          ...storeDataSource.contentTypeId && {contentTypeId: storeDataSource.contentTypeId},
          ...storeDataSource.environmentId && {environmentId: storeDataSource.environmentId},
        });
        dataset = dataContentful.data
        break;

      case "storefront":
        const data = getData(storeDataSource.type, {
          storeDomain: pageData.shopDomain,
          storefrontToken: storeDataSource.accessToken,
        });
        dataset = data?.data?.data?.products?.edges || [];
        break;

      case "static":
        dataset = storeDataSource.dataset;
        break;
    }

    // return <div>sththsth</div>

    return dataset?.map((data: any, ind: number) => (
      <DataSourceContext.Provider value={data}>
        <EnhancedElement key={ind} store={store}>
          {renderChildren(children, elementStores)}
        </EnhancedElement>
      </DataSourceContext.Provider>
    ));
  }

  const dataContext = useContext(DataSourceContext);

  if (store.hasOwnProperty("dataBinding")) {
    const bindStore = store.dataBinding;

    Object.keys(bindStore).forEach((key) => {
      const { exist, value } = checkPropertyKey(dataContext, bindStore[key]);
      if (exist) {
        store.data[key] = value;
      }
    });
  }

  return (
    <EnhancedElement store={store}>
      {renderChildren(children, elementStores)}
    </EnhancedElement>
  );
};