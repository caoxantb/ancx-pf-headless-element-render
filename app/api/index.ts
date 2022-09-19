import { plugStorefrontData } from "../api/shopify-storefront";
import { plugContentfulData } from "../api/contentful";

export const getData: any = (type: string, data: Record<string, any>) => {
  switch (type) {
    case "contentful":
      return plugContentfulData(data);
    case "storefront":
      return plugStorefrontData(data);
  }
};
