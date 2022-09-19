import {jsx as $hCgyA$jsx, jsxs as $hCgyA$jsxs, Fragment as $hCgyA$Fragment} from "react/jsx-runtime";
import $hCgyA$react, {useContext as $hCgyA$useContext, memo as $hCgyA$memo, cloneElement as $hCgyA$cloneElement, useState as $hCgyA$useState, useEffect as $hCgyA$useEffect} from "react";
import $hCgyA$styledcomponents from "styled-components";
import {Buffer as $hCgyA$Buffer} from "buffer";
import {createClient as $hCgyA$createClient} from "contentful";

const $83ff32df0b45137b$export$24c10788497c064 = {
    "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
    "__v": 0,
    "configs": {
        "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
        "__v": 0,
        "applyNewImage": true,
        "asyncHelper": false,
        "createdAt": "2022-07-21T07:46:24.686Z",
        "forceByPassGoogleLightHouse": false,
        "imageLazyLoad": false,
        "lazyLoad": false,
        "nativeImageLazyLoad": true,
        "showPageOutline": true,
        "trackingIDs": [],
        "updatedAt": "2022-09-06T18:04:55.459Z",
        "useThemeJQ": false,
        "hideHeaderFooter": false,
        "published": true,
        "publishedTemplateAt": null,
        "autoSave": false,
        "showLinkToLogin": null
    },
    "createdAt": "2022-07-21T07:46:11.405Z",
    "customCSS": "",
    "customJS": "window.__handleSideEffectForOtherApp = () => {\n  console.log('hey 1234')\n}",
    "deletedAt": null,
    "datasources": [
        {
            "id": "1",
            "type": "contentful",
            "accessToken": "qiaNHBvZSR2yLrm_hrE-WJd2A52Q3Ihk387hw2gcvLA"
        },
        {
            "id": "2",
            "type": "static",
            "dataset": [
                {
                    "name": "Item 1",
                    "description": "This is item 1",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/3b6a545a8f309a6085625bcadcb19712.jpg?v=1641807515",
                    "link": "https://www.pagefly.io"
                },
                {
                    "name": "Item 2",
                    "description": "This is item 2",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/82c7b0b668b962bb4ffae786c8e827cd.jpg?v=1641807516",
                    "link": "https://www.pagefly.io"
                },
                {
                    "name": "Item 3",
                    "description": "This is item 3",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/0711d7a9ab22e1d866c244756574349b.jpg?v=1641807512",
                    "link": "https://www.pagefly.io"
                }, 
            ]
        }
    ],
    "items": [
        {
            "_id": "15a811bc-4f32-43d9-b59f-e8848de3bcd0",
            "__v": 0,
            "children": [
                "a811bc4f-3253-49b5-9fe8-848de3bcd02c"
            ],
            "createdAt": "2022-07-21T07:46:12.049Z",
            "styles": [],
            "type": "Body",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "a811bc4f-3253-49b5-9fe8-848de3bcd02c",
            "__v": 0,
            "children": [
                "3baedd6a-3e44-45a5-831b-e3f57fee745b"
            ],
            "createdAt": "2022-07-21T07:46:12.019Z",
            "styles": [],
            "type": "Layout",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "3baedd6a-3e44-45a5-831b-e3f57fee745b",
            "__v": 0,
            "children": [
                "7f46c7ae-3bae-4d6a-be44-b5a5431be3f5"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Section",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "7f46c7ae-3bae-4d6a-be44-b5a5431be3f5",
            "__v": 0,
            "children": [
                "c7ae3bae-dd6a-4e44-b5a5-431be3f57fee"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "doubling": false,
                "cols": {
                    "all": 12,
                    "laptop": 12,
                    "tablet": 3,
                    "mobile": 1
                },
                "equals": false
            },
            "styles": [],
            "type": "Row",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "c7ae3bae-dd6a-4e44-b5a5-431be3f57fee",
            "__v": 0,
            "children": [
                "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
                "6a18635a-2d2f-4ff4-8b44-5a4a7c5bf48f",
                "5a2d2f8f-f48b-445a-8a7c-5bf48fe83f88",
                "2fc9267a-ff72-460d-876a-18635a2d2f8f"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "size": 4,
                "tablet": 4,
                "laptop": 4
            },
            "styles": [],
            "dataSourceId": "2",
            "type": "Column",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
            "__v": 0,
            "children": [
                "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
                "6a3e44b5-a543-4be3-b57f-ee745bfb416a"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Heading",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
            "__v": 0,
            "children": [],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Icon",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "6a3e44b5-a543-4be3-b57f-ee745bfb416a",
            "__v": 0,
            "children": [],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "value": "This is your heading text."
            },
            "dataBinding": {
                "value": "name"
            },
            "styles": [],
            "type": "Text",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "type": "Image",
            "children": [],
            "data": {
                "src": "https://cdn.shopify.com/s/files/1/2406/3371/collections/3b6a545a8f309a6085625bcadcb19712.jpg?v=1641807515",
                "naturalWidth": 1358,
                "naturalHeight": 813
            },
            "dataBinding": {
                "src": "image"
            },
            "_id": "5a2d2f8f-f48b-445a-8a7c-5bf48fe83f88"
        },
        {
            "type": "Paragraph",
            "children": [
                "18635a2d-2f8f-448b-845a-4a7c5bf48fe8",
                "635a2d2f-8ff4-4b44-9a4a-7c5bf48fe83f"
            ],
            "_id": "6a18635a-2d2f-4ff4-8b44-5a4a7c5bf48f"
        },
        {
            "type": "Dropcap",
            "children": [],
            "data": {
                "value": "A"
            },
            "_id": "18635a2d-2f8f-448b-845a-4a7c5bf48fe8"
        },
        {
            "type": "Text",
            "children": [],
            "data": {
                "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "placeholder": "Enter text... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            "dataBinding": {
                "value": "description"
            },
            "_id": "635a2d2f-8ff4-4b44-9a4a-7c5bf48fe83f"
        },
        {
            "type": "Button",
            "children": [
                "c9267aff-7296-4dc7-aa18-635a2d2f8ff4",
                "267aff72-960d-476a-9863-5a2d2f8ff48b"
            ],
            "data": {
                "href": "https://www.pagefly.io",
                "clickAction": "url",
                "openNewTab": false
            },
            "dataBinding": {
                "href": "link"
            },
            "_id": "2fc9267a-ff72-460d-876a-18635a2d2f8f"
        },
        {
            "type": "Icon",
            "children": [],
            "_id": "c9267aff-7296-4dc7-aa18-635a2d2f8ff4"
        },
        {
            "type": "Text",
            "children": [],
            "data": {
                "value": "Read more",
                "placeholder": "Enter text here..."
            },
            "_id": "267aff72-960d-476a-9863-5a2d2f8ff48b"
        }
    ],
    "pageflyVersion": "3.23.3",
    "selectedFonts": {
        "Pacifico": {
            "400": 0,
            "500": 0
        },
        "Roboto": {
            "400": 0
        },
        "Source Sans Pro": {
            "400": 0
        },
        "Quicksand": {
            "400": 0,
            "700": 0
        },
        "Playfair Display": {
            "400": 0
        },
        "Lato": {
            "400": 0
        },
        "Open Sans": {
            "400": 0
        },
        "Aguafina Script": {
            "400": 0
        }
    },
    "shopDomain": "duongvd-os2.myshopify.com",
    "shopifyPage": {
        "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
        "__v": 0,
        "collections": [],
        "products": [],
        "selectedTags": [],
        "created_at": "2022-08-08T01:44:52.000Z",
        "handle": "1-untitled-2022-07-21-14-46-9",
        "id": "87355228366",
        "published_at": "2022-08-08T01:44:52.000Z",
        "setAll": false,
        "shop_id": "59052163278",
        "template_suffix": "pf-91feb786",
        "title": "1 - Untitled - 2022-07-21 14:46:9",
        "updated_at": "2022-09-05T07:15:23.000Z",
        "blogId": null
    },
    "status": "unlocked",
    "styles": [
        {
            "_id": "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
            "__v": 0,
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": '{"all":{"&":"text-align: center; color: var(--pf-primary-color);"}}',
            "type": "Heading",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
            "__v": 0,
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": '{"all":{"&":"font-size: inherit"}}',
            "type": "Icon",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        }
    ],
    "title": "1 - Untitled - 2022-07-21 14:46:9",
    "type": "page",
    "updatedAt": "2022-09-06T18:04:55.443Z",
    "allCss": ".kCnmwO,.lhtyiH{position:relative}.cFOwMS{--pf-sample-color:#5d6b82;--pf-border-color:#d1d5db;opacity:1!important}.kCnmwO:empty{display:initial}.lhtyiH{padding:20px 0}@media all{.__pf_FagRvE8y .pf-6_{text-align:center;color:rgb(250, 84, 28)}}",
    "header": "",
    "html": '<style></style><div style="opacity:0" class="sc-faUpoM cFOwMS __pf __pf_FagRvE8y" id="__pf"><div data-pf-type="Body" class="sc-ksHpcM hkPZIR pf-1_"><div data-pf-type="Layout" class="sc-cVAmsi cFAsxI pf-2_"><div data-section-id="pf-3e44" data-pf-type="Section" class="sc-igXgud lhtyiH pf-3_"><div style="--cw:1170px" class="sc-cjrPHo eOcrMz"><div class="sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh" style="--s-xs:15px" data-pf-type="Row"><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-5_"></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-6_"><h3 data-pf-type="Heading" class="sc-bSqaIl iXTDAP pf-7_"><span data-pf-type="Text" class="sc-BHvUt fJlZte pf-9_">This is your heading text.</span></h3></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-10_"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.3","shopDomain":"duongvd-os2.myshopify.com","elementData":{},"pageTitle":"1 - Untitled - 2022-07-21 14:46:9","pageType":"page","pageId":"91feb786-f3cb-466d-89cb-8900f9e34186","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Pacifico":{"400":0,"500":0},"Roboto":{"400":0},"Source Sans Pro":{"400":0},"Quicksand":{"400":0,"700":0},"Playfair Display":{"400":0},"Lato":{"400":0},"Open Sans":{"400":0},"Aguafina Script":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src="https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js" async></script>',
    "preview": "",
    "publishedHtml": '<style></style><div style="opacity:0" class="sc-faUpoM cFOwMS __pf __pf_FagRvE8y" id="__pf"><div data-pf-type="Body" class="sc-ksHpcM hkPZIR pf-1_"><div data-pf-type="Layout" class="sc-cVAmsi cFAsxI pf-2_"><div data-section-id="pf-3e44" data-pf-type="Section" class="sc-igXgud lhtyiH pf-3_"><div style="--cw:1170px" class="sc-cjrPHo eOcrMz"><div class="sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh" style="--s-xs:15px" data-pf-type="Row"><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-5_"></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-6_"><h3 data-pf-type="Heading" class="sc-bSqaIl iXTDAP pf-7_"><span data-pf-type="Text" class="sc-BHvUt fJlZte pf-9_">This is your heading text.</span></h3></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-10_"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.3","shopDomain":"duongvd-os2.myshopify.com","elementData":{},"pageTitle":"1 - Untitled - 2022-07-21 14:46:9","pageType":"page","pageId":"91feb786-f3cb-466d-89cb-8900f9e34186","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Pacifico":{"400":0,"500":0},"Roboto":{"400":0},"Source Sans Pro":{"400":0},"Quicksand":{"400":0,"700":0},"Playfair Display":{"400":0},"Lato":{"400":0},"Open Sans":{"400":0},"Aguafina Script":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src="https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js" async></script>',
    "publishedAt": "2022-09-06T18:04:51.198Z"
};


const $509048f88ae63650$export$892df7a800f83b87 = {
    "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
    "__v": 0,
    "configs": {
        "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
        "__v": 0,
        "applyNewImage": true,
        "asyncHelper": false,
        "createdAt": "2022-07-21T07:46:24.686Z",
        "forceByPassGoogleLightHouse": false,
        "imageLazyLoad": false,
        "lazyLoad": false,
        "nativeImageLazyLoad": true,
        "showPageOutline": true,
        "trackingIDs": [],
        "updatedAt": "2022-09-06T18:04:55.459Z",
        "useThemeJQ": false,
        "hideHeaderFooter": false,
        "published": true,
        "publishedTemplateAt": null,
        "autoSave": false,
        "showLinkToLogin": null
    },
    "createdAt": "2022-07-21T07:46:11.405Z",
    "customCSS": "",
    "customJS": "window.__handleSideEffectForOtherApp = () => {\n  console.log('hey 1234')\n}",
    "deletedAt": null,
    "datasources": [
        {
            "id": "1",
            "type": "contentful",
            "spaceId": "0d7a2ukqejkq",
            "accessToken": "HiBZKBrAnYwT6UKX_y4u5B4LBaLXsOL590LEP-kN130",
            "contentTypeId": "testDatasource"
        },
        {
            "id": "2",
            "type": "static",
            "dataset": [
                {
                    "name": "Item 1",
                    "description": "This is item 1",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/3b6a545a8f309a6085625bcadcb19712.jpg?v=1641807515",
                    "link": "https://www.pagefly.io"
                },
                {
                    "name": "Item 2",
                    "description": "This is item 2",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/82c7b0b668b962bb4ffae786c8e827cd.jpg?v=1641807516",
                    "link": "https://www.pagefly.io"
                },
                {
                    "name": "Item 3",
                    "description": "This is item 3",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/0711d7a9ab22e1d866c244756574349b.jpg?v=1641807512",
                    "link": "https://www.pagefly.io"
                }, 
            ]
        }
    ],
    "items": [
        {
            "_id": "15a811bc-4f32-43d9-b59f-e8848de3bcd0",
            "__v": 0,
            "children": [
                "a811bc4f-3253-49b5-9fe8-848de3bcd02c"
            ],
            "createdAt": "2022-07-21T07:46:12.049Z",
            "styles": [],
            "type": "Body",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "a811bc4f-3253-49b5-9fe8-848de3bcd02c",
            "__v": 0,
            "children": [
                "3baedd6a-3e44-45a5-831b-e3f57fee745b"
            ],
            "createdAt": "2022-07-21T07:46:12.019Z",
            "styles": [],
            "type": "Layout",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "3baedd6a-3e44-45a5-831b-e3f57fee745b",
            "__v": 0,
            "children": [
                "7f46c7ae-3bae-4d6a-be44-b5a5431be3f5"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Section",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "7f46c7ae-3bae-4d6a-be44-b5a5431be3f5",
            "__v": 0,
            "children": [
                "c7ae3bae-dd6a-4e44-b5a5-431be3f57fee"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "doubling": false,
                "cols": {
                    "all": 12,
                    "laptop": 12,
                    "tablet": 3,
                    "mobile": 1
                },
                "equals": false
            },
            "styles": [],
            "type": "Row",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "c7ae3bae-dd6a-4e44-b5a5-431be3f57fee",
            "__v": 0,
            "children": [
                "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
                "6a18635a-2d2f-4ff4-8b44-5a4a7c5bf48f",
                "5a2d2f8f-f48b-445a-8a7c-5bf48fe83f88",
                "2fc9267a-ff72-460d-876a-18635a2d2f8f"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "size": 4,
                "tablet": 4,
                "laptop": 4
            },
            "styles": [],
            "dataSourceId": "1",
            "type": "Column",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
            "__v": 0,
            "children": [
                "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
                "6a3e44b5-a543-4be3-b57f-ee745bfb416a"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Heading",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
            "__v": 0,
            "children": [],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Icon",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "6a3e44b5-a543-4be3-b57f-ee745bfb416a",
            "__v": 0,
            "children": [],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "value": "This is your heading text."
            },
            "dataBinding": {
                "value": "name"
            },
            "styles": [],
            "type": "Text",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "type": "Image",
            "children": [],
            "data": {
                "src": "https://cdn.shopify.com/s/files/1/2406/3371/collections/3b6a545a8f309a6085625bcadcb19712.jpg?v=1641807515",
                "naturalWidth": 1358,
                "naturalHeight": 813
            },
            "dataBinding": {
                "src": "image"
            },
            "_id": "5a2d2f8f-f48b-445a-8a7c-5bf48fe83f88"
        },
        {
            "type": "Paragraph",
            "children": [
                "18635a2d-2f8f-448b-845a-4a7c5bf48fe8",
                "635a2d2f-8ff4-4b44-9a4a-7c5bf48fe83f"
            ],
            "_id": "6a18635a-2d2f-4ff4-8b44-5a4a7c5bf48f"
        },
        {
            "type": "Dropcap",
            "children": [],
            "data": {
                "value": "A"
            },
            "_id": "18635a2d-2f8f-448b-845a-4a7c5bf48fe8"
        },
        {
            "type": "Text",
            "children": [],
            "data": {
                "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "placeholder": "Enter text... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            "dataBinding": {
                "value": "description"
            },
            "_id": "635a2d2f-8ff4-4b44-9a4a-7c5bf48fe83f"
        },
        {
            "type": "Button",
            "children": [
                "c9267aff-7296-4dc7-aa18-635a2d2f8ff4",
                "267aff72-960d-476a-9863-5a2d2f8ff48b"
            ],
            "data": {
                "href": "https://www.pagefly.io",
                "clickAction": "url",
                "openNewTab": false
            },
            "dataBinding": {
                "href": "link"
            },
            "_id": "2fc9267a-ff72-460d-876a-18635a2d2f8f"
        },
        {
            "type": "Icon",
            "children": [],
            "_id": "c9267aff-7296-4dc7-aa18-635a2d2f8ff4"
        },
        {
            "type": "Text",
            "children": [],
            "data": {
                "value": "Read more",
                "placeholder": "Enter text here..."
            },
            "_id": "267aff72-960d-476a-9863-5a2d2f8ff48b"
        }
    ],
    "pageflyVersion": "3.23.3",
    "selectedFonts": {
        "Pacifico": {
            "400": 0,
            "500": 0
        },
        "Roboto": {
            "400": 0
        },
        "Source Sans Pro": {
            "400": 0
        },
        "Quicksand": {
            "400": 0,
            "700": 0
        },
        "Playfair Display": {
            "400": 0
        },
        "Lato": {
            "400": 0
        },
        "Open Sans": {
            "400": 0
        },
        "Aguafina Script": {
            "400": 0
        }
    },
    "shopDomain": "duongvd-os2.myshopify.com",
    "shopifyPage": {
        "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
        "__v": 0,
        "collections": [],
        "products": [],
        "selectedTags": [],
        "created_at": "2022-08-08T01:44:52.000Z",
        "handle": "1-untitled-2022-07-21-14-46-9",
        "id": "87355228366",
        "published_at": "2022-08-08T01:44:52.000Z",
        "setAll": false,
        "shop_id": "59052163278",
        "template_suffix": "pf-91feb786",
        "title": "1 - Untitled - 2022-07-21 14:46:9",
        "updated_at": "2022-09-05T07:15:23.000Z",
        "blogId": null
    },
    "status": "unlocked",
    "styles": [
        {
            "_id": "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
            "__v": 0,
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": '{"all":{"&":"text-align: center; color: var(--pf-primary-color);"}}',
            "type": "Heading",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
            "__v": 0,
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": '{"all":{"&":"font-size: inherit"}}',
            "type": "Icon",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        }
    ],
    "title": "1 - Untitled - 2022-07-21 14:46:9",
    "type": "page",
    "updatedAt": "2022-09-06T18:04:55.443Z",
    "allCss": ".kCnmwO,.lhtyiH{position:relative}.cFOwMS{--pf-sample-color:#5d6b82;--pf-border-color:#d1d5db;opacity:1!important}.kCnmwO:empty{display:initial}.lhtyiH{padding:20px 0}@media all{.__pf_FagRvE8y .pf-6_{text-align:center;color:rgb(250, 84, 28)}}",
    "header": "",
    "html": '<style></style><div style="opacity:0" class="sc-faUpoM cFOwMS __pf __pf_FagRvE8y" id="__pf"><div data-pf-type="Body" class="sc-ksHpcM hkPZIR pf-1_"><div data-pf-type="Layout" class="sc-cVAmsi cFAsxI pf-2_"><div data-section-id="pf-3e44" data-pf-type="Section" class="sc-igXgud lhtyiH pf-3_"><div style="--cw:1170px" class="sc-cjrPHo eOcrMz"><div class="sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh" style="--s-xs:15px" data-pf-type="Row"><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-5_"></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-6_"><h3 data-pf-type="Heading" class="sc-bSqaIl iXTDAP pf-7_"><span data-pf-type="Text" class="sc-BHvUt fJlZte pf-9_">This is your heading text.</span></h3></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-10_"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.3","shopDomain":"duongvd-os2.myshopify.com","elementData":{},"pageTitle":"1 - Untitled - 2022-07-21 14:46:9","pageType":"page","pageId":"91feb786-f3cb-466d-89cb-8900f9e34186","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Pacifico":{"400":0,"500":0},"Roboto":{"400":0},"Source Sans Pro":{"400":0},"Quicksand":{"400":0,"700":0},"Playfair Display":{"400":0},"Lato":{"400":0},"Open Sans":{"400":0},"Aguafina Script":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src="https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js" async></script>',
    "preview": "",
    "publishedHtml": '<style></style><div style="opacity:0" class="sc-faUpoM cFOwMS __pf __pf_FagRvE8y" id="__pf"><div data-pf-type="Body" class="sc-ksHpcM hkPZIR pf-1_"><div data-pf-type="Layout" class="sc-cVAmsi cFAsxI pf-2_"><div data-section-id="pf-3e44" data-pf-type="Section" class="sc-igXgud lhtyiH pf-3_"><div style="--cw:1170px" class="sc-cjrPHo eOcrMz"><div class="sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh" style="--s-xs:15px" data-pf-type="Row"><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-5_"></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-6_"><h3 data-pf-type="Heading" class="sc-bSqaIl iXTDAP pf-7_"><span data-pf-type="Text" class="sc-BHvUt fJlZte pf-9_">This is your heading text.</span></h3></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-10_"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.3","shopDomain":"duongvd-os2.myshopify.com","elementData":{},"pageTitle":"1 - Untitled - 2022-07-21 14:46:9","pageType":"page","pageId":"91feb786-f3cb-466d-89cb-8900f9e34186","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Pacifico":{"400":0,"500":0},"Roboto":{"400":0},"Source Sans Pro":{"400":0},"Quicksand":{"400":0,"700":0},"Playfair Display":{"400":0},"Lato":{"400":0},"Open Sans":{"400":0},"Aguafina Script":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src="https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js" async></script>',
    "publishedAt": "2022-09-06T18:04:51.198Z"
};


const $fc565b81ba575eda$export$276c71f37e27127d = {
    "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
    "__v": 0,
    "configs": {
        "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
        "__v": 0,
        "applyNewImage": true,
        "asyncHelper": false,
        "createdAt": "2022-07-21T07:46:24.686Z",
        "forceByPassGoogleLightHouse": false,
        "imageLazyLoad": false,
        "lazyLoad": false,
        "nativeImageLazyLoad": true,
        "showPageOutline": true,
        "trackingIDs": [],
        "updatedAt": "2022-09-06T18:04:55.459Z",
        "useThemeJQ": false,
        "hideHeaderFooter": false,
        "published": true,
        "publishedTemplateAt": null,
        "autoSave": false,
        "showLinkToLogin": null
    },
    "createdAt": "2022-07-21T07:46:11.405Z",
    "customCSS": "",
    "customJS": "window.__handleSideEffectForOtherApp = () => {\n  console.log('hey 1234')\n}",
    "deletedAt": null,
    "datasources": [
        {
            "id": "1",
            "type": "contentful",
            "spaceId": "0d7a2ukqejkq",
            "accessToken": "HiBZKBrAnYwT6UKX_y4u5B4LBaLXsOL590LEP-kN130",
            "contentTypeId": "testDatasource"
        },
        {
            "id": "2",
            "type": "static",
            "dataset": [
                {
                    "name": "Item 1",
                    "description": "This is item 1",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/3b6a545a8f309a6085625bcadcb19712.jpg?v=1641807515",
                    "link": "https://www.pagefly.io"
                },
                {
                    "name": "Item 2",
                    "description": "This is item 2",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/82c7b0b668b962bb4ffae786c8e827cd.jpg?v=1641807516",
                    "link": "https://www.pagefly.io"
                },
                {
                    "name": "Item 3",
                    "description": "This is item 3",
                    "image": "https://cdn.shopify.com/s/files/1/2406/3371/collections/0711d7a9ab22e1d866c244756574349b.jpg?v=1641807512",
                    "link": "https://www.pagefly.io"
                }, 
            ]
        },
        {
            "id": "3",
            "type": "storefront",
            "accessToken": "0de90dcb6dfc3e7dc0f5548cba884c39"
        }
    ],
    "items": [
        {
            "_id": "15a811bc-4f32-43d9-b59f-e8848de3bcd0",
            "__v": 0,
            "children": [
                "a811bc4f-3253-49b5-9fe8-848de3bcd02c"
            ],
            "createdAt": "2022-07-21T07:46:12.049Z",
            "styles": [],
            "type": "Body",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "a811bc4f-3253-49b5-9fe8-848de3bcd02c",
            "__v": 0,
            "children": [
                "3baedd6a-3e44-45a5-831b-e3f57fee745b"
            ],
            "createdAt": "2022-07-21T07:46:12.019Z",
            "styles": [],
            "type": "Layout",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "3baedd6a-3e44-45a5-831b-e3f57fee745b",
            "__v": 0,
            "children": [
                "7f46c7ae-3bae-4d6a-be44-b5a5431be3f5"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Section",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "7f46c7ae-3bae-4d6a-be44-b5a5431be3f5",
            "__v": 0,
            "children": [
                "c7ae3bae-dd6a-4e44-b5a5-431be3f57fee"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "doubling": false,
                "cols": {
                    "all": 12,
                    "laptop": 12,
                    "tablet": 3,
                    "mobile": 1
                },
                "equals": false
            },
            "styles": [],
            "type": "Row",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "c7ae3bae-dd6a-4e44-b5a5-431be3f57fee",
            "__v": 0,
            "children": [
                "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
                "6a18635a-2d2f-4ff4-8b44-5a4a7c5bf48f",
                "5a2d2f8f-f48b-445a-8a7c-5bf48fe83f88",
                "2fc9267a-ff72-460d-876a-18635a2d2f8f"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "size": 4,
                "tablet": 4,
                "laptop": 4
            },
            "styles": [],
            "dataSourceId": "3",
            "type": "Column",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
            "__v": 0,
            "children": [
                "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
                "6a3e44b5-a543-4be3-b57f-ee745bfb416a"
            ],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Heading",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
            "__v": 0,
            "children": [],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": [],
            "type": "Icon",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "6a3e44b5-a543-4be3-b57f-ee745bfb416a",
            "__v": 0,
            "children": [],
            "createdAt": "2022-09-05T07:15:24.305Z",
            "data": {
                "value": "This is your heading text."
            },
            "dataBinding": {
                "value": "node.title"
            },
            "styles": [],
            "type": "Text",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "type": "Image",
            "children": [],
            "data": {
                "src": "https://cdn.shopify.com/s/files/1/2406/3371/collections/3b6a545a8f309a6085625bcadcb19712.jpg?v=1641807515",
                "naturalWidth": 1358,
                "naturalHeight": 813
            },
            "dataBinding": {
                "src": "node.featuredImage.url"
            },
            "_id": "5a2d2f8f-f48b-445a-8a7c-5bf48fe83f88"
        },
        {
            "type": "Paragraph",
            "children": [
                "18635a2d-2f8f-448b-845a-4a7c5bf48fe8",
                "635a2d2f-8ff4-4b44-9a4a-7c5bf48fe83f"
            ],
            "_id": "6a18635a-2d2f-4ff4-8b44-5a4a7c5bf48f"
        },
        {
            "type": "Dropcap",
            "children": [],
            "data": {
                "value": "A"
            },
            "_id": "18635a2d-2f8f-448b-845a-4a7c5bf48fe8"
        },
        {
            "type": "Text",
            "children": [],
            "data": {
                "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "placeholder": "Enter text... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            "dataBinding": {
                "value": "node.description"
            },
            "_id": "635a2d2f-8ff4-4b44-9a4a-7c5bf48fe83f"
        },
        {
            "type": "Button",
            "children": [
                "c9267aff-7296-4dc7-aa18-635a2d2f8ff4",
                "267aff72-960d-476a-9863-5a2d2f8ff48b"
            ],
            "data": {
                "href": "https://www.pagefly.io",
                "clickAction": "url",
                "openNewTab": false
            },
            "dataBinding": {
                "href": "link"
            },
            "_id": "2fc9267a-ff72-460d-876a-18635a2d2f8f"
        },
        {
            "type": "Icon",
            "children": [],
            "_id": "c9267aff-7296-4dc7-aa18-635a2d2f8ff4"
        },
        {
            "type": "Text",
            "children": [],
            "data": {
                "value": "Read more",
                "placeholder": "Enter text here..."
            },
            "_id": "267aff72-960d-476a-9863-5a2d2f8ff48b"
        }
    ],
    "pageflyVersion": "3.23.3",
    "selectedFonts": {
        "Pacifico": {
            "400": 0,
            "500": 0
        },
        "Roboto": {
            "400": 0
        },
        "Source Sans Pro": {
            "400": 0
        },
        "Quicksand": {
            "400": 0,
            "700": 0
        },
        "Playfair Display": {
            "400": 0
        },
        "Lato": {
            "400": 0
        },
        "Open Sans": {
            "400": 0
        },
        "Aguafina Script": {
            "400": 0
        }
    },
    "shopDomain": "duongvd-os2.myshopify.com",
    "shopifyPage": {
        "_id": "91feb786-f3cb-466d-89cb-8900f9e34186",
        "__v": 0,
        "collections": [],
        "products": [],
        "selectedTags": [],
        "created_at": "2022-08-08T01:44:52.000Z",
        "handle": "1-untitled-2022-07-21-14-46-9",
        "id": "87355228366",
        "published_at": "2022-08-08T01:44:52.000Z",
        "setAll": false,
        "shop_id": "59052163278",
        "template_suffix": "pf-91feb786",
        "title": "1 - Untitled - 2022-07-21 14:46:9",
        "updated_at": "2022-09-05T07:15:23.000Z",
        "blogId": null
    },
    "status": "unlocked",
    "styles": [
        {
            "_id": "aedd6a3e-44b5-4543-9be3-f57fee745bfb",
            "__v": 0,
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": '{"all":{"&":"text-align: center; color: var(--pf-primary-color);"}}',
            "type": "Heading",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
            "__v": 0,
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": '{"all":{"&":"font-size: inherit"}}',
            "type": "Icon",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        }
    ],
    "title": "1 - Untitled - 2022-07-21 14:46:9",
    "type": "page",
    "updatedAt": "2022-09-06T18:04:55.443Z",
    "allCss": ".kCnmwO,.lhtyiH{position:relative}.cFOwMS{--pf-sample-color:#5d6b82;--pf-border-color:#d1d5db;opacity:1!important}.kCnmwO:empty{display:initial}.lhtyiH{padding:20px 0}@media all{.__pf_FagRvE8y .pf-6_{text-align:center;color:rgb(250, 84, 28)}}",
    "header": "",
    "html": '<style></style><div style="opacity:0" class="sc-faUpoM cFOwMS __pf __pf_FagRvE8y" id="__pf"><div data-pf-type="Body" class="sc-ksHpcM hkPZIR pf-1_"><div data-pf-type="Layout" class="sc-cVAmsi cFAsxI pf-2_"><div data-section-id="pf-3e44" data-pf-type="Section" class="sc-igXgud lhtyiH pf-3_"><div style="--cw:1170px" class="sc-cjrPHo eOcrMz"><div class="sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh" style="--s-xs:15px" data-pf-type="Row"><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-5_"></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-6_"><h3 data-pf-type="Heading" class="sc-bSqaIl iXTDAP pf-7_"><span data-pf-type="Text" class="sc-BHvUt fJlZte pf-9_">This is your heading text.</span></h3></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-10_"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.3","shopDomain":"duongvd-os2.myshopify.com","elementData":{},"pageTitle":"1 - Untitled - 2022-07-21 14:46:9","pageType":"page","pageId":"91feb786-f3cb-466d-89cb-8900f9e34186","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Pacifico":{"400":0,"500":0},"Roboto":{"400":0},"Source Sans Pro":{"400":0},"Quicksand":{"400":0,"700":0},"Playfair Display":{"400":0},"Lato":{"400":0},"Open Sans":{"400":0},"Aguafina Script":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src="https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js" async></script>',
    "preview": "",
    "publishedHtml": '<style></style><div style="opacity:0" class="sc-faUpoM cFOwMS __pf __pf_FagRvE8y" id="__pf"><div data-pf-type="Body" class="sc-ksHpcM hkPZIR pf-1_"><div data-pf-type="Layout" class="sc-cVAmsi cFAsxI pf-2_"><div data-section-id="pf-3e44" data-pf-type="Section" class="sc-igXgud lhtyiH pf-3_"><div style="--cw:1170px" class="sc-cjrPHo eOcrMz"><div class="sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh" style="--s-xs:15px" data-pf-type="Row"><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-5_"></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-6_"><h3 data-pf-type="Heading" class="sc-bSqaIl iXTDAP pf-7_"><span data-pf-type="Text" class="sc-BHvUt fJlZte pf-9_">This is your heading text.</span></h3></div></div><div class="pf-c" style="--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4"><div data-pf-type="Column" class="sc-gXRojI kCnmwO pf-10_"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={"baseURL":"https://apps.pagefly.io","analyticsURL":"https://analytics.pagefly.io","isBackend":false,"cdnURL":"https://cdn.pagefly.io","pageflyVersion":"3.23.3","shopDomain":"duongvd-os2.myshopify.com","elementData":{},"pageTitle":"1 - Untitled - 2022-07-21 14:46:9","pageType":"page","pageId":"91feb786-f3cb-466d-89cb-8900f9e34186","lazyLoad":false,"forceByPassGoogleLightHouse":false,"imageLazyLoad":false,"nativeImageLazyLoad":true,"useThemeJQ":false,"selectedFonts":{"Pacifico":{"400":0,"500":0},"Roboto":{"400":0},"Source Sans Pro":{"400":0},"Quicksand":{"400":0,"700":0},"Playfair Display":{"400":0},"Lato":{"400":0},"Open Sans":{"400":0},"Aguafina Script":{"400":0}},"trackingIDs":[],"shopifyProxyPath":"/a/pf_preview"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src="https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js" async></script>',
    "publishedAt": "2022-09-06T18:04:51.198Z"
};







const $ce5afecbcc02bd67$var$Basic = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $hCgyA$jsx)("div", {
        children: children
    });
};
var $ce5afecbcc02bd67$export$2e2bcd8739ae039 = $ce5afecbcc02bd67$var$Basic;




const $05305feb64259a28$var$Heading = (props)=>{
    const { store: { data: data  } , children: children  } = props;
    const { showIcon: showIcon  } = data || {};
    return /*#__PURE__*/ (0, $hCgyA$jsx)("h3", {
        children: !showIcon ? children.filter((item, idx)=>idx !== 0) : children
    });
};
var $05305feb64259a28$export$2e2bcd8739ae039 = $05305feb64259a28$var$Heading;




const $ae7885602e49687e$var$Text = (props)=>{
    const { store: store  } = props;
    const { data: { value: value  }  } = store;
    return /*#__PURE__*/ (0, $hCgyA$jsx)("span", {
        children: value
    });
};
var $ae7885602e49687e$export$2e2bcd8739ae039 = $ae7885602e49687e$var$Text;





const $c283ba1b2f151c2d$var$Section = (props)=>{
    const { children: children , store: store , store: { _id: _id  }  } = props;
    const data = store.data || {};
    const { container: container , containerWidth: containerWidth , bgType: bgType , parallaxSpeed: parallaxSpeed , filterColor: filterColor ,  } = data;
    const overlayStyle = filterColor && filterColor !== "rgba(0,0,0,0)" ? {
        [`--overlay`]: filterColor
    } : undefined;
    const containerStyle = container ? {
        [`--cw`]: isNaN(containerWidth) ? containerWidth : containerWidth + "px"
    } : undefined;
    return /*#__PURE__*/ (0, $hCgyA$jsx)($c283ba1b2f151c2d$var$StyledSection, {
        "data-parallax": bgType === "parallax" || undefined,
        "data-parallax-speed": bgType === "parallax" && parallaxSpeed ? parallaxSpeed : undefined,
        style: {
            ...overlayStyle
        },
        "data-section-id": `pf-${_id.split("-")[0]}`,
        children: /*#__PURE__*/ (0, $hCgyA$jsx)($c283ba1b2f151c2d$export$42a852a2b6b56249, {
            style: containerStyle,
            children: children
        })
    });
};
const $c283ba1b2f151c2d$var$StyledSection = (0, $hCgyA$styledcomponents).div`
  & {
    padding: 20px 0;
    position: relative;
  }
`;
const $c283ba1b2f151c2d$export$42a852a2b6b56249 = (0, $hCgyA$styledcomponents).div``;
var $c283ba1b2f151c2d$export$2e2bcd8739ae039 = $c283ba1b2f151c2d$var$Section;








const $a07ab03f670637d5$var$NullElement = ()=>/*#__PURE__*/ (0, $hCgyA$jsx)("div", {});
const $a07ab03f670637d5$export$643600c573d23dce = (comp = $a07ab03f670637d5$var$NullElement)=>{
    return function EnhancedComponent(props) {
        const realElement = comp(props);
        const { store: { options: options , count: // data: {className: cN, animationHover},
        count  }  } = props;
        const className = realElement?.props?.className;
        const { hideOnDesktop: hideOnDesktop , hideOnLaptop: hideOnLaptop , hideOnTablet: hideOnTablet , hideOnMobile: hideOnMobile  } = options || {};
        const hideOnClasses = (hideOnDesktop ? " pf-lg-hide" : "") + (hideOnLaptop ? " pf-md-hide" : "") + (hideOnTablet ? " pf-sm-hide" : "") + (hideOnMobile ? " pf-hide" : "");
        const enhancedProps = {
            ...realElement?.props,
            // id: id || undefined,
            className: `pf-${count}_` + (className ? ` ${className}` : "") + hideOnClasses
        };
        return realElement ? /*#__PURE__*/ (0, $hCgyA$cloneElement)(realElement, enhancedProps) : null;
    };
};


const $46c19984784c7801$var$fixSize = (s)=>{
    s = Number(s);
    return s < 0 ? 0 : s > 12 ? 12 : s;
};
const $46c19984784c7801$var$Column = (props)=>{
    const { children: children  } = props;
    return /*#__PURE__*/ (0, $hCgyA$jsx)($46c19984784c7801$var$StyledCol, {
        children: children
    });
};
const $46c19984784c7801$var$EnhancedColumns = (0, $a07ab03f670637d5$export$643600c573d23dce)($46c19984784c7801$var$Column);
const $46c19984784c7801$var$EnhancedColumn = (props)=>{
    const { store: store  } = props;
    const { data: { mobile: mobile , tablet: tablet , laptop: laptop , size: size , hideOnMobile: hideOnMobile , hideOnLaptop: hideOnLaptop , hideOnTablet: hideOnTablet , hideOnDesktop: hideOnDesktop  }  } = store;
    let columnWidth;
    const xs = $46c19984784c7801$var$fixSize(mobile);
    const sm = $46c19984784c7801$var$fixSize(tablet);
    const md = $46c19984784c7801$var$fixSize(laptop);
    const lg = $46c19984784c7801$var$fixSize(size);
    columnWidth = xs ? {
        "--c-xs": xs
    } : {};
    sm && sm !== xs && (columnWidth["--c-sm"] = sm);
    md && (columnWidth["--c-md"] = md);
    lg && (columnWidth["--c-lg"] = lg);
    const hideOnClasses = (hideOnDesktop ? " pf-lg-hide" : "") + (hideOnLaptop ? " pf-md-hide" : "") + (hideOnTablet ? " pf-sm-hide" : "") + (hideOnMobile ? " pf-hide" : "");
    return /*#__PURE__*/ (0, $hCgyA$jsx)("div", {
        className: `pf-c${hideOnClasses}`,
        style: columnWidth,
        children: /*#__PURE__*/ (0, $hCgyA$jsx)($46c19984784c7801$var$EnhancedColumns, {
            store: store,
            ...props
        })
    });
};
const $46c19984784c7801$var$StyledCol = (0, $hCgyA$styledcomponents).div`
  position: relative;
  &:empty {
    display: initial;
  }
`;
var $46c19984784c7801$export$2e2bcd8739ae039 = $46c19984784c7801$var$EnhancedColumn;





const $1a9159a33899e690$export$6750f4b96fdb17fe = (obj)=>{
    if (!obj || typeof obj !== "object") return obj;
    const newObj = {};
    Object.keys(obj).forEach((prop)=>{
        if (obj[prop] !== "" && obj[prop] !== null && obj[prop] !== undefined && JSON.stringify(obj[prop]) !== "{}") newObj[prop] = typeof obj[prop] === "object" && !Array.isArray(obj[prop]) ? $1a9159a33899e690$export$6750f4b96fdb17fe(obj[prop]) : obj[prop];
    });
    return newObj;
};
var $1a9159a33899e690$export$2e2bcd8739ae039 = $1a9159a33899e690$export$6750f4b96fdb17fe;


function $0be9d5abccd9d11b$export$2c2156e8934ffa3a(data, alias) {
    const { mobile: xs , tablet: sm , laptop: md , all: lg  } = data;
    const smCode = sm === xs ? {} : {
        [`--${alias}-sm`]: sm
    };
    const mdCode = md === sm ? {} : {
        [`--${alias}-md`]: md
    };
    const lgCode = lg === md ? {} : {
        [`--${alias}-lg`]: lg
    };
    return (0, $1a9159a33899e690$export$2e2bcd8739ae039)({
        [`--${alias}-xs`]: xs,
        ...smCode,
        ...mdCode,
        ...lgCode
    });
}


const $41612856a6718933$export$38fb686e578cffec = (gutter = {})=>{
    const spacing = {};
    Object.entries(gutter).forEach(([k, v])=>{
        if (v === "") spacing[k] = "";
        else {
            v = typeof v === "string" ? parseInt(v) : v;
            spacing[k] = `${v / 2}px`;
        }
    });
    return spacing;
};


const $f5e18de6548e40b8$var$Row = (props)=>{
    let { store: { data: { gutter: gutter , align: align , stretch: stretch , equals: equals , cols: cols  } , type: type  } , children: children  } = props;
    align = align !== "lt" ? ` pf-c-${align}` : "";
    let stretchClass = stretch ? " pf-r-eh" : "";
    const className = `pf-r${align}${stretchClass}`;
    const style = {
        ...(0, $0be9d5abccd9d11b$export$2c2156e8934ffa3a)((0, $41612856a6718933$export$38fb686e578cffec)(gutter), "s")
    };
    return /*#__PURE__*/ (0, $hCgyA$jsx)($f5e18de6548e40b8$var$StyledRow, {
        className: className,
        style: style,
        "data-pf-type": type,
        children: children
    });
};
$f5e18de6548e40b8$var$Row.defaultProps = {
    align: "lt",
    doubling: true,
    reversed: false,
    stackable: false,
    stretch: true,
    spacing: 30,
    gutter: {
        all: "30px",
        laptop: "30px",
        tablet: "30px",
        mobile: "30px"
    },
    cols: {
        all: 12,
        laptop: 12,
        tablet: 2,
        mobile: 1
    }
};
const $f5e18de6548e40b8$var$StyledRow = (0, $hCgyA$styledcomponents).div``;
var $f5e18de6548e40b8$export$2e2bcd8739ae039 = $f5e18de6548e40b8$var$Row;





const $88c083388e11d8aa$export$7722b1870d9eec03 = (0, $hCgyA$styledcomponents).div`
  display: inline-block;
  max-width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;
const $88c083388e11d8aa$export$dd86bb0cc441e033 = $88c083388e11d8aa$export$7722b1870d9eec03.withComponent("a");


const $aa37c15c2d8317a1$var$placeholder = "placeholder/img-placeholder-illustration.svg";
$aa37c15c2d8317a1$var$Image.defaultProps = {
    name: "image",
    src: "",
    fullWidth: {
        all: true,
        laptop: true,
        tablet: true,
        mobile: true
    },
    naturalWidth: 0,
    naturalHeight: 0,
    ratio: {
        all: "original",
        laptop: "original",
        tablet: "original",
        mobile: "original"
    }
};
function $aa37c15c2d8317a1$var$Image(props) {
    const { store: { mode: mode  } , store: store , title: title , naturalWidth: naturalWidth , naturalHeight: naturalHeight  } = props;
    let imageRef = /*#__PURE__*/ (0, $hCgyA$react).createRef();
    const renderPicture = ()=>{
        const { title: title , alt: alt , src: src  } = store.data;
        const placeholderStyle = {
            objectFit: "contain",
            background: "#e8eaed",
            border: "1px solid var(--pf-border-color)",
            borderRadius: "2px",
            maxHeight: "60vh"
        };
        return /*#__PURE__*/ (0, $hCgyA$jsx)("img", {
            ref: imageRef,
            src: src,
            width: naturalWidth,
            height: naturalHeight,
            alt: alt,
            title: title,
            onError: (e)=>{
                const imgEl = e.currentTarget;
                imgEl.src = mode === "view" ? "" : $aa37c15c2d8317a1$var$placeholder;
                imgEl.onerror = null;
                mode !== "view" && Object.assign(imgEl.style, placeholderStyle);
                return true;
            },
            style: !src ? placeholderStyle : undefined
        });
    };
    const ImageWrapper = (0, $88c083388e11d8aa$export$7722b1870d9eec03);
    // if (mode === 'view' && clickAction && clickAction !== 'none') {
    return /*#__PURE__*/ (0, $hCgyA$jsx)(ImageWrapper, {
        title: title,
        children: renderPicture()
    });
// }
// return renderPicture()
}
var $aa37c15c2d8317a1$export$2e2bcd8739ae039 = $aa37c15c2d8317a1$var$Image;





$a9142ec88ee278c6$var$Paragraph.defaultProps = {
    dropcap: false
};
function $a9142ec88ee278c6$var$Paragraph(props) {
    const { dropcap: dropcap , children: children  } = props;
    const content = [
        dropcap ? children[0] : null,
        children[1]
    ];
    return /*#__PURE__*/ (0, $hCgyA$jsx)($a9142ec88ee278c6$var$StyledParagraph, {
        dropcap: dropcap && children.length === 1 ? false : dropcap,
        className: dropcap && children.length === 1 ? false : dropcap ? `dropcap--${props.dropcapStyle || "none"}` : "",
        dropcapColor: props.dropcapColor,
        dropcapBackground: props.dropcapBackground,
        dimensions: props.dimensions,
        dropcapFontSize: props.dropcapFontSize,
        children: content
    });
}
var $a9142ec88ee278c6$export$2e2bcd8739ae039 = $a9142ec88ee278c6$var$Paragraph;
const $a9142ec88ee278c6$var$StyledParagraph = (0, $hCgyA$styledcomponents).p`
  & > span:last-child {
    line-height: inherit;
    display: block;
    margin-right: ${(p)=>p.dropcap ? null : "0 !important"};
  }

  &[class*='dropcap--'] > span:first-child {
    display: block;
    margin-right: 10px;
    float: left;
    color: ${(props)=>props.dropcap && props.dropcapColor};
    width: ${(props)=>props.dropcap && props.dimensions ? props.dimensions : null};
    height: ${(props)=>props.dropcap && props.dimensions ? props.dimensions : null};
    line-height: ${(props)=>props.dropcap && props.dimensions ? props.dimensions : null};
    font-size: ${(props)=>props.dropcap && props.dropcapFontSize};
    background: ${(props)=>props.dropcap && props.dropcapStyle !== "none" && props.dropcapBackground};
  }

  &.dropcap--circle > span:first-child {
    border-radius: 100%;
  }

  & ol,
  & ul {
    list-style-position: inside;
  }
  & blockquote {
    font-size: inherit;
  }
`;





const $07a87d71635eef3e$export$2d5d2ba3c7c8c40b = (0, $hCgyA$styledcomponents).a`
  display: inline-block;
  line-height: 1;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  outline: 0;
  i {
    ${(p)=>p.iconPos === "left" && "margin-right: 5px;"}
    ${(p)=>p.iconPos === "right" && "margin-left: 5px;"}
		${(p)=>p.iconPos === "top" && "margin-bottom: 5px;display: block;"}
  }
  span {
    color: inherit;
  }
`;


$e5520888ca8f2834$var$Button.defaultProps = {
    value: "Button",
    btnStyle: "plain",
    iconPos: "left",
    targetStyle: "",
    name: "button"
};
function $e5520888ca8f2834$var$Button(props) {
    const { children: children  } = props;
    const { btnStyle: btnStyle , showIcon: showIcon , iconPos: iconPos , href: href  } = props.store.data;
    const content = [
        showIcon ? children[0] : null,
        children[1] || null
    ];
    iconPos === "right" && content.reverse();
    return /*#__PURE__*/ (0, $hCgyA$jsx)((0, $07a87d71635eef3e$export$2d5d2ba3c7c8c40b), {
        iconPos: iconPos,
        btnStyle: btnStyle,
        href: href,
        children: content
    });
}
var $e5520888ca8f2834$export$2e2bcd8739ae039 = $e5520888ca8f2834$var$Button;





function $72f93aebbb5a746c$var$Icon(props) {
    const { icon: icon  } = props.store.data;
    return /*#__PURE__*/ (0, $hCgyA$jsx)($72f93aebbb5a746c$var$StyledIcon, {
        className: `pfa pfa-${icon}`
    });
}
$72f93aebbb5a746c$var$Icon.defaultProps = {
    icon: "star",
    name: "icon"
};
var $72f93aebbb5a746c$export$2e2bcd8739ae039 = $72f93aebbb5a746c$var$Icon;
const $72f93aebbb5a746c$var$StyledIcon = (0, $hCgyA$styledcomponents).i`
  vertical-align: middle;
  + span {
    vertical-align: middle;
  }
`;


const $6a05cbc83fd546ef$var$elements = {
    Body: (0, $ce5afecbcc02bd67$export$2e2bcd8739ae039),
    Layout: (0, $ce5afecbcc02bd67$export$2e2bcd8739ae039),
    Heading: $05305feb64259a28$export$2e2bcd8739ae039,
    Section: $c283ba1b2f151c2d$export$2e2bcd8739ae039,
    Column: $46c19984784c7801$export$2e2bcd8739ae039,
    Row: $f5e18de6548e40b8$export$2e2bcd8739ae039,
    Text: $ae7885602e49687e$export$2e2bcd8739ae039,
    Image: $aa37c15c2d8317a1$export$2e2bcd8739ae039,
    Paragraph: $a9142ec88ee278c6$export$2e2bcd8739ae039,
    Button: $e5520888ca8f2834$export$2e2bcd8739ae039,
    Icon: $72f93aebbb5a746c$export$2e2bcd8739ae039
};
var $6a05cbc83fd546ef$export$2e2bcd8739ae039 = $6a05cbc83fd546ef$var$elements;


function $b8ffdfedfdd2dd93$export$dd702b3c8240390c(target = {}, source = {}) {
    const t = {
        ...target || {}
    };
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source))if (source[key] instanceof Object && !Array.isArray(source[key])) Object.assign(source[key], $b8ffdfedfdd2dd93$export$dd702b3c8240390c(t[key], source[key]));
    // Join `target` and modified `source`
    Object.assign(t || {}, source);
    return t;
}




var $0fef43c9338d6e80$require$Buffer = $hCgyA$Buffer;
function $0fef43c9338d6e80$var$hexToBase64(hex) {
    let out = "";
    const arr = hex.split("");
    while(arr.length)out += String.fromCharCode(parseInt(arr.shift() + arr.shift()), 16);
    if (typeof window !== "undefined") return window.btoa(out).replace(/[=]+/g, "").replace(/\//g, "_").replace(/\+/g, "-");
    return $0fef43c9338d6e80$require$Buffer.from(hex, "hex").toString("base64");
}
function $0fef43c9338d6e80$export$92dcd718a7c275a8(hex) {
    return $0fef43c9338d6e80$var$hexToBase64(hex.replace(/^(\w+)-(\w+)-.*$/, "$1$2"));
}


const $10661f6b75f6ef5a$var$graphqlBody = (query, variables)=>{
    return JSON.stringify({
        query: query,
        variables: variables
    });
};
const $10661f6b75f6ef5a$export$28e566af566f070a = ({ storeDomain: storeDomain , storefrontApiVersion: storefrontApiVersion , storefrontToken: storefrontToken  }, query, variables)=>{
    return async ()=>{
        const response = await fetch(`https://${storeDomain}/api/${storefrontApiVersion}/graphql.json`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-Shopify-Storefront-Access-Token": storefrontToken
            },
            body: $10661f6b75f6ef5a$var$graphqlBody(query, variables)
        });
        if (!response.ok) throw new Error("There is something wrong");
        return response.json();
    };
};



const $ad2e946cb38437eb$var$storefrontApiVersion = "2022-07";
const $ad2e946cb38437eb$export$9088a05f2d701846 = ({ storeDomain: storeDomain , storefrontToken: storefrontToken  })=>{
    const [data, setData] = (0, $hCgyA$useState)({});
    (0, $hCgyA$useEffect)(()=>{
        (async ()=>{
            const data = await (0, $10661f6b75f6ef5a$export$28e566af566f070a)({
                storeDomain: storeDomain,
                storefrontApiVersion: $ad2e946cb38437eb$var$storefrontApiVersion,
                storefrontToken: storefrontToken
            }, $ad2e946cb38437eb$var$QUERY_LIST_PRODUCT)();
            setData(data);
        })();
    }, []);
    return {
        data: data
    };
};
const $ad2e946cb38437eb$var$QUERY_LIST_PRODUCT = `
    {
        products(first: 5) {
            edges {
                node {
                    title
                    description
                    featuredImage {
                        url
                    }
                }
            }
        }
    }
`;




const $a839152ba794fdc8$export$1f9e77831c0c5b8b = async (spaceId, accessToken, contentTypeId, environmentId)=>{
    const client = (0, $hCgyA$createClient)({
        space: spaceId,
        environment: environmentId ? environmentId : "master",
        accessToken: accessToken
    });
    const response = contentTypeId ? await client.getEntries({
        content_type: contentTypeId
    }) : await client.getEntries();
    const itemFields = response.items.map((res)=>res.fields);
    const data = await Promise.all(itemFields);
    data.forEach((d)=>{
        Object.keys(d).forEach((key)=>{
            if (d[key].sys?.type === "Asset") {
                const thisData = d[key];
                d[key] = thisData.fields.file.url;
            }
        });
    });
    return data;
};


const $ff606bfdd08aed1d$export$58bcd33f230b1e04 = ({ spaceId: spaceId , accessToken: accessToken , contentTypeId: contentTypeId , environmentId: environmentId  })=>{
    const [data, setData] = (0, $hCgyA$useState)([]);
    (0, $hCgyA$useEffect)(()=>{
        (async ()=>{
            const data = await (0, $a839152ba794fdc8$export$1f9e77831c0c5b8b)(spaceId, accessToken, contentTypeId, environmentId);
            setData(data);
        })();
    }, []);
    return {
        data: data
    };
};


const $bb319f4c82440062$export$7a171f172be0782e = (type, data)=>{
    switch(type){
        case "contentful":
            return (0, $ff606bfdd08aed1d$export$58bcd33f230b1e04)(data);
        case "storefront":
            return (0, $ad2e946cb38437eb$export$9088a05f2d701846)(data);
    }
};


const $c1df5c057d36f7f6$export$93816f7236bf57 = (obj, propPath)=>{
    const keys = propPath.split(".");
    let value = obj;
    for(let i = 0; i < keys.length; i++){
        if (value[keys[i]] === undefined) return {
            exist: false
        };
        value = value[keys[i]];
    }
    return {
        exist: true,
        value: value
    };
};


const $a301d8183908e175$export$7c9b6dae7965b940 = `.__pf img, .__pf video {
    max-width: 100%;
    border: 0;
    vertical-align: middle;
}
.__pf *, .__pf *:before, .__pf *:after {
    box-sizing: border-box;
}
.__pf [disabled], .__pf [readonly] {
    cursor: default;
}
.__pf [data-href],
.__pf button:not([data-pf-id]):hover {
    cursor: pointer;
}
.__pf [disabled] {
    pointer-events: none;
}
.__pf [hidden] {
    display: none !important;
}
.__pf [data-link="inherit"] {
    color: inherit;
    text-decoration: none;
}
.__pf [data-pf-placeholder] {
    outline: none;
    height: auto;
    display: none;
    pointer-events: none !important;
}
.__pf [style*="--cw"] {
    padding: 0 15px;
    width: 100%;
    margin: auto;
    max-width: var(--cw);
}
.__pf .pf-ifr {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
.__pf .pf-bg-lazy {
    background-image: none !important;
}
.__pf .pf-r {
    display: flex;
    flex-wrap: wrap;
}
.__pf .pf-r-dg {
    display: grid;
}
.__pf [style*="--c-xs"] {
    max-width: calc(100%/12*var(--c-xs));
    flex-basis: calc(100%/12*var(--c-xs));
}
.__pf [style*="--s-xs"] {
    margin: 0 calc(-1 * var(--s-xs));
}
.__pf [style*="--s-xs"] > .pf-c {
    padding: var(--s-xs);
}
.__pf .pf-r-ew > .pf-c {
    flex-grow: 1;
    flex-basis: 0;
}
.__pf [style*="--ew-xs"] > .pf-c {
    flex-basis: calc(100% / var(--ew-xs));
    max-width: calc(100% / var(--ew-xs));
}
.__pf [style*="--ratio"] {
    position: relative;
    padding-bottom: var(--ratio);
}
.__pf [style*="--ratio"] img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.__pf .oh {
    overflow: hidden;
}
.main-content {
    padding: 0;
}
.site-footer, .site-footer-wrapper, .footer-section, main .accent-background+.shopify-section {
    margin: 0;
}
@media (max-width: 767px) {
    .__pf .pf-hide {
        display: none !important;
    }
}
@media (max-width: 1024px) and (min-width: 768px) {
    .__pf .pf-sm-hide {
        display: none !important;
    }
}
@media (max-width: 1199px) and (min-width: 1025px) {
    .__pf .pf-md-hide {
        display: none !important;
    }
}
@media (min-width: 768px) {
    .__pf [style*="--s-sm"] {
        margin: 0 calc(-1 * var(--s-sm));
    }
    .__pf [style*="--c-sm"] {
        max-width: calc(100%/12*var(--c-sm));
        flex-basis: calc(100%/12*var(--c-sm));
    }
    .__pf [style*="--s-sm"] > .pf-c {
        padding: var(--s-sm);
    }
    .__pf [style*="--ew-sm"] > .pf-c {
        flex-basis: calc(100% / var(--ew-sm));
        max-width: calc(100% / var(--ew-sm));
    }
}
@media (min-width: 1025px) {
    .__pf [style*="--s-md"] {
        margin: 0 calc(-1 * var(--s-md));
    }
    .__pf [style*="--c-md"] {
        max-width: calc(100%/12*var(--c-md));
        flex-basis: calc(100%/12*var(--c-md));
    }
    .__pf [style*="--s-md"] > .pf-c {
        padding: var(--s-md);
    }
    .__pf [style*="--ew-md"] > .pf-c {
        flex-basis: calc(100% / var(--ew-md));
        max-width: calc(100% / var(--ew-md));
    }
}
@media (min-width: 1200px) {
    .__pf [style*="--s-lg"] {
        margin: 0 calc(-1 * var(--s-lg));
    }
    .__pf [style*="--c-lg"] {
        max-width: calc(100%/12*var(--c-lg));
        flex-basis: calc(100%/12*var(--c-lg));
    }
    .__pf [style*="--s-lg"] > .pf-c {
        padding: var(--s-lg);
    }
    .__pf [style*="--ew-lg"] > .pf-c {
        flex-basis: calc(100% / var(--ew-lg));
        max-width: calc(100% / var(--ew-lg));
    }
    .__pf .pf-lg-hide {
        display: none !important;
    }
}
.__pf .pf-r-eh > .pf-c {
    display: flex;
}
.__pf .pf-r-eh > .pf-c > div {
    width: 100%;
}
.__pf .pf-c-lt {
    justify-content: flex-start;
    align-items: flex-start;
}
.__pf .pf-c-ct {
    justify-content: center;
    align-items: flex-start;
}
.__pf .pf-c-rt {
    justify-content: flex-end;
    align-items: flex-start;
}
.__pf .pf-c-lm {
    justify-content: flex-start;
    align-items: center;
}
.__pf .pf-c-cm {
    justify-content: center;
    align-items: center;
}
.__pf .pf-c-rm {
    justify-content: flex-end;
    align-items: center;
}
.__pf .pf-c-lb {
    justify-content: flex-start;
    align-items: flex-end;
}
.__pf .pf-c-cb {
    justify-content: center;
    align-items: flex-end;
}
.__pf .pf-c-rb {
    justify-content: flex-end;
    align-items: flex-end;
}
`;


const $f9cf4e01c35a4093$export$9a1b410c76d0e146 = /*#__PURE__*/ (0, $hCgyA$react).createContext({});
const $f9cf4e01c35a4093$export$b246532a35d482de = /*#__PURE__*/ (0, $hCgyA$react).createContext({});
const $f9cf4e01c35a4093$export$cd762ccf1a583d69 = (children, elementStores)=>{
    if (Array.isArray(children)) return children.map((childId, idx)=>{
        const elementStore = elementStores.get(childId);
        if (elementStore) return /*#__PURE__*/ (0, $hCgyA$jsx)($f9cf4e01c35a4093$export$1de8c376a354d952, {
            store: elementStore
        }, `${childId}-${idx}`);
        return null;
    });
};
const $f9cf4e01c35a4093$export$224298a172524123 = (pageData)=>{
    const { items: items  } = pageData;
    const elementStores = new Map();
    const bodyStore = items.find((item)=>item.type === "Body");
    if (bodyStore) {
        items.forEach((item, idx)=>{
            const { _id: _id  } = item;
            elementStores.set(_id, {
                _id: _id,
                ...item,
                count: idx + 1
            });
        });
        return /*#__PURE__*/ (0, $hCgyA$jsxs)((0, $hCgyA$Fragment), {
            children: [
                /*#__PURE__*/ (0, $hCgyA$jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: (0, $a301d8183908e175$export$7c9b6dae7965b940)
                    }
                }),
                /*#__PURE__*/ (0, $hCgyA$jsx)($f9cf4e01c35a4093$export$9a1b410c76d0e146.Provider, {
                    value: {
                        elementStores: elementStores,
                        pageData: pageData
                    },
                    children: /*#__PURE__*/ (0, $hCgyA$jsx)("div", {
                        className: `__pf __pf_${(0, $0fef43c9338d6e80$export$92dcd718a7c275a8)(bodyStore._id)}`,
                        children: /*#__PURE__*/ (0, $hCgyA$jsx)($f9cf4e01c35a4093$export$1de8c376a354d952, {
                            store: bodyStore
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0, $hCgyA$jsx)("div", {
        children: "This page has no root"
    });
};
const $f9cf4e01c35a4093$export$1de8c376a354d952 = ({ store: store  })=>{
    const { type: type , children: children  } = store;
    const { elementStores: elementStores , pageData: pageData  } = (0, $hCgyA$useContext)($f9cf4e01c35a4093$export$9a1b410c76d0e146);
    const EnhancedElement = /*#__PURE__*/ (0, $hCgyA$memo)(type === "Column" ? (0, $6a05cbc83fd546ef$export$2e2bcd8739ae039)[type] : (0, $a07ab03f670637d5$export$643600c573d23dce)((0, $6a05cbc83fd546ef$export$2e2bcd8739ae039)[type]));
    const defaultProps = (0, $6a05cbc83fd546ef$export$2e2bcd8739ae039)[type]?.defaultProps || {};
    store.data = (0, $b8ffdfedfdd2dd93$export$dd702b3c8240390c)(defaultProps, store.data);
    if (store.hasOwnProperty("dataSourceId")) {
        const storeDataSource = pageData.datasources.find((dataSource)=>dataSource.id === store.dataSourceId);
        let dataset;
        switch(storeDataSource?.type){
            case "contentful":
                const dataContentful = (0, $bb319f4c82440062$export$7a171f172be0782e)(storeDataSource.type, {
                    spaceId: storeDataSource.spaceId,
                    accessToken: storeDataSource.accessToken,
                    ...storeDataSource.contentTypeId && {
                        contentTypeId: storeDataSource.contentTypeId
                    },
                    ...storeDataSource.environmentId && {
                        environmentId: storeDataSource.environmentId
                    }
                });
                dataset = dataContentful.data;
                break;
            case "storefront":
                const data = (0, $bb319f4c82440062$export$7a171f172be0782e)(storeDataSource.type, {
                    storeDomain: pageData.shopDomain,
                    storefrontToken: storeDataSource.accessToken
                });
                dataset = data?.data?.data?.products?.edges || [];
                break;
            case "static":
                dataset = storeDataSource.dataset;
                break;
        }
        // return <div>sththsth</div>
        return dataset?.map((data, ind)=>/*#__PURE__*/ (0, $hCgyA$jsx)($f9cf4e01c35a4093$export$b246532a35d482de.Provider, {
                value: data,
                children: /*#__PURE__*/ (0, $hCgyA$jsx)(EnhancedElement, {
                    store: store,
                    children: $f9cf4e01c35a4093$export$cd762ccf1a583d69(children, elementStores)
                }, ind)
            }));
    }
    const dataContext = (0, $hCgyA$useContext)($f9cf4e01c35a4093$export$b246532a35d482de);
    if (store.hasOwnProperty("dataBinding")) {
        const bindStore = store.dataBinding;
        Object.keys(bindStore).forEach((key)=>{
            const { exist: exist , value: value  } = (0, $c1df5c057d36f7f6$export$93816f7236bf57)(dataContext, bindStore[key]);
            if (exist) store.data[key] = value;
        });
    }
    return /*#__PURE__*/ (0, $hCgyA$jsx)(EnhancedElement, {
        store: store,
        children: $f9cf4e01c35a4093$export$cd762ccf1a583d69(children, elementStores)
    });
};


const $c3f6c693698dc7cd$export$c4a41ed60262b6c6 = (type)=>{
    switch(type){
        case "static":
            return 0, $83ff32df0b45137b$export$24c10788497c064;
        case "contentful":
            return 0, $509048f88ae63650$export$892df7a800f83b87;
        case "storefront":
            return 0, $fc565b81ba575eda$export$276c71f37e27127d;
    }
};
function $c3f6c693698dc7cd$export$2e2bcd8739ae039({ accessToken: accessToken , pageId: pageId , pageHandler: pageHandler  }) {
    return (0, $f9cf4e01c35a4093$export$224298a172524123)($c3f6c693698dc7cd$export$c4a41ed60262b6c6(pageHandler));
}


export {$c3f6c693698dc7cd$export$c4a41ed60262b6c6 as renderData, $c3f6c693698dc7cd$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
