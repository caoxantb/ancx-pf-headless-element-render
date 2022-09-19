import { FAKE_DATA } from "./app/stores/data/FAKE_DATA";
import { FAKE_DATA_CONTENTFUL } from "./app/stores/data/FAKE_DATA_CONTENTFUL";
import { FAKE_DATA_STOREFRONT } from "./app/stores/data/FAKE_DATA_STOREFRONT";
import { renderPage } from './app/stores/render-elements';
// import './app/styles/main.css'

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

export default function PageFlyPage({accessToken, pageId, pageHandler}: any) {
  return renderPage(renderData(pageHandler))
}