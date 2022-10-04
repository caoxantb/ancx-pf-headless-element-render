import React, { createContext } from "react";
import { FAKE_DATA } from "./app/stores/data/FAKE_DATA";
import { FAKE_DATA_CONTENTFUL } from "./app/stores/data/FAKE_DATA_CONTENTFUL";
import { FAKE_DATA_STOREFRONT } from "./app/stores/data/FAKE_DATA_STOREFRONT";
import { renderPage } from "./app/stores/render-elements";

export const pageFlyLoader = async (siteId, pageHandler) => {
  const data = await fetch(
    `http://localhost:3000/api/public/page/handle?handle=${pageHandler}&shopDomain=${siteId}`
  );
  const pageData = await data.json();
  return pageData;
};

export const renderData = (type: string) => {
  switch (type) {
    case "static":
      return FAKE_DATA;
    case "contentful":
      return FAKE_DATA_CONTENTFUL;
    case "storefront":
      return FAKE_DATA_STOREFRONT;
  }
};

export default function PageFlyPage({ accessToken, pageData }: any) {
  return renderPage(pageData);
}
