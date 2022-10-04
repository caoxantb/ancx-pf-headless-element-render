export const FAKE_DATA_STOREFRONT = {
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
            "accessToken": "0de90dcb6dfc3e7dc0f5548cba884c39",
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
            "styles": "{\"all\":{\"&\":\"text-align: center; color: var(--pf-primary-color);\"}}",
            "type": "Heading",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        },
        {
            "_id": "dd6a3e44-b5a5-431b-a3f5-7fee745bfb41",
            "__v": 0,
            "createdAt": "2022-09-05T07:15:24.305Z",
            "styles": "{\"all\":{\"&\":\"font-size: inherit\"}}",
            "type": "Icon",
            "updatedAt": "2022-09-06T18:04:55.465Z"
        }
    ],
    "title": "1 - Untitled - 2022-07-21 14:46:9",
    "type": "page",
    "updatedAt": "2022-09-06T18:04:55.443Z",
    "allCss": ".kCnmwO,.lhtyiH{position:relative}.cFOwMS{--pf-sample-color:#5d6b82;--pf-border-color:#d1d5db;opacity:1!important}.kCnmwO:empty{display:initial}.lhtyiH{padding:20px 0}@media all{.__pf_FagRvE8y .pf-6_{text-align:center;color:rgb(250, 84, 28)}}",
    "header": "",
    "html": "<style></style><div style=\"opacity:0\" class=\"sc-faUpoM cFOwMS __pf __pf_FagRvE8y\" id=\"__pf\"><div data-pf-type=\"Body\" class=\"sc-ksHpcM hkPZIR pf-1_\"><div data-pf-type=\"Layout\" class=\"sc-cVAmsi cFAsxI pf-2_\"><div data-section-id=\"pf-3e44\" data-pf-type=\"Section\" class=\"sc-igXgud lhtyiH pf-3_\"><div style=\"--cw:1170px\" class=\"sc-cjrPHo eOcrMz\"><div class=\"sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh\" style=\"--s-xs:15px\" data-pf-type=\"Row\"><div class=\"pf-c\" style=\"--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4\"><div data-pf-type=\"Column\" class=\"sc-gXRojI kCnmwO pf-5_\"></div></div><div class=\"pf-c\" style=\"--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4\"><div data-pf-type=\"Column\" class=\"sc-gXRojI kCnmwO pf-6_\"><h3 data-pf-type=\"Heading\" class=\"sc-bSqaIl iXTDAP pf-7_\"><span data-pf-type=\"Text\" class=\"sc-BHvUt fJlZte pf-9_\">This is your heading text.</span></h3></div></div><div class=\"pf-c\" style=\"--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4\"><div data-pf-type=\"Column\" class=\"sc-gXRojI kCnmwO pf-10_\"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={\"baseURL\":\"https://apps.pagefly.io\",\"analyticsURL\":\"https://analytics.pagefly.io\",\"isBackend\":false,\"cdnURL\":\"https://cdn.pagefly.io\",\"pageflyVersion\":\"3.23.3\",\"shopDomain\":\"duongvd-os2.myshopify.com\",\"elementData\":{},\"pageTitle\":\"1 - Untitled - 2022-07-21 14:46:9\",\"pageType\":\"page\",\"pageId\":\"91feb786-f3cb-466d-89cb-8900f9e34186\",\"lazyLoad\":false,\"forceByPassGoogleLightHouse\":false,\"imageLazyLoad\":false,\"nativeImageLazyLoad\":true,\"useThemeJQ\":false,\"selectedFonts\":{\"Pacifico\":{\"400\":0,\"500\":0},\"Roboto\":{\"400\":0},\"Source Sans Pro\":{\"400\":0},\"Quicksand\":{\"400\":0,\"700\":0},\"Playfair Display\":{\"400\":0},\"Lato\":{\"400\":0},\"Open Sans\":{\"400\":0},\"Aguafina Script\":{\"400\":0}},\"trackingIDs\":[],\"shopifyProxyPath\":\"/a/pf_preview\"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src=\"https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js\" async></script>",
    "preview": "",
    "publishedHtml": "<style></style><div style=\"opacity:0\" class=\"sc-faUpoM cFOwMS __pf __pf_FagRvE8y\" id=\"__pf\"><div data-pf-type=\"Body\" class=\"sc-ksHpcM hkPZIR pf-1_\"><div data-pf-type=\"Layout\" class=\"sc-cVAmsi cFAsxI pf-2_\"><div data-section-id=\"pf-3e44\" data-pf-type=\"Section\" class=\"sc-igXgud lhtyiH pf-3_\"><div style=\"--cw:1170px\" class=\"sc-cjrPHo eOcrMz\"><div class=\"sc-jgrJph iGtnpe pf-4_ pf-r pf-r-eh\" style=\"--s-xs:15px\" data-pf-type=\"Row\"><div class=\"pf-c\" style=\"--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4\"><div data-pf-type=\"Column\" class=\"sc-gXRojI kCnmwO pf-5_\"></div></div><div class=\"pf-c\" style=\"--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4\"><div data-pf-type=\"Column\" class=\"sc-gXRojI kCnmwO pf-6_\"><h3 data-pf-type=\"Heading\" class=\"sc-bSqaIl iXTDAP pf-7_\"><span data-pf-type=\"Text\" class=\"sc-BHvUt fJlZte pf-9_\">This is your heading text.</span></h3></div></div><div class=\"pf-c\" style=\"--c-xs:12;--c-sm:4;--c-md:4;--c-lg:4\"><div data-pf-type=\"Column\" class=\"sc-gXRojI kCnmwO pf-10_\"></div></div></div></div></div></div></div></div><script>\n    !function(){window.__pagefly_setting__&&(window.__pagefly_setting2__=window.__pagefly_setting__),window.__pagefly_setting__={\"baseURL\":\"https://apps.pagefly.io\",\"analyticsURL\":\"https://analytics.pagefly.io\",\"isBackend\":false,\"cdnURL\":\"https://cdn.pagefly.io\",\"pageflyVersion\":\"3.23.3\",\"shopDomain\":\"duongvd-os2.myshopify.com\",\"elementData\":{},\"pageTitle\":\"1 - Untitled - 2022-07-21 14:46:9\",\"pageType\":\"page\",\"pageId\":\"91feb786-f3cb-466d-89cb-8900f9e34186\",\"lazyLoad\":false,\"forceByPassGoogleLightHouse\":false,\"imageLazyLoad\":false,\"nativeImageLazyLoad\":true,\"useThemeJQ\":false,\"selectedFonts\":{\"Pacifico\":{\"400\":0,\"500\":0},\"Roboto\":{\"400\":0},\"Source Sans Pro\":{\"400\":0},\"Quicksand\":{\"400\":0,\"700\":0},\"Playfair Display\":{\"400\":0},\"Lato\":{\"400\":0},\"Open Sans\":{\"400\":0},\"Aguafina Script\":{\"400\":0}},\"trackingIDs\":[],\"shopifyProxyPath\":\"/a/pf_preview\"},window.__pagefly_setting2__&&(window.__pagefly_setting__=function _(d,b){let c={...d||{}};for(let a of Object.keys(b))b[a]instanceof Object&&(Array.isArray(b[a])&&c[a]?Object.assign(b[a],[...b[a],...c[a]]):Object.assign(b[a],_(c[a],b[a])));return Object.assign(c||{},b),c}(__pagefly_setting2__,__pagefly_setting__),delete window.__pagefly_setting2__),window.__pagefly_setting__.moneyFormat={{shop.money_format|json}}}();\n    </script><script src=\"https://cdn.pagefly.io/pagefly/3.23.3/core/helper.js\" async></script>",
    "publishedAt": "2022-09-06T18:04:51.198Z"
}
