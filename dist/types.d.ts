declare namespace Image {
    var defaultProps: {
        name: string;
        src: string;
        fullWidth: {
            all: boolean;
            laptop: boolean;
            tablet: boolean;
            mobile: boolean;
        };
        naturalWidth: number;
        naturalHeight: number;
        ratio: {
            all: string;
            laptop: string;
            tablet: string;
            mobile: string;
        };
    };
}
declare namespace Paragraph {
    var defaultProps: {
        dropcap: boolean;
    };
}
declare global {
    interface Window {
        pf_accordion_offset: any;
    }
}
declare namespace Button {
    var defaultProps: {
        clickAction?: string;
        href: string;
        linkTarget: string;
        section: string;
        mailTo: string;
        phone: string;
        popupContent: string;
        popupWidth: string;
        popupHeight: string;
        popupAnimation: string;
        youtubeData: any;
        htmlVideoData: any;
        vimeoData: any;
        shopifyPageData: any;
        popupImageData: any;
        value: string;
        btnStyle: string;
        iconPos: string;
        targetStyle: string;
        name: string;
    };
}
declare namespace Icon {
    var defaultProps: {
        icon: string;
        name: string;
    };
}
export const pageFlyLoader: (siteId: any, pageHandler: any) => Promise<any>;
export const renderData: (type: string) => {
    _id: string;
    __v: number;
    configs: {
        _id: string;
        __v: number;
        applyNewImage: boolean;
        asyncHelper: boolean;
        createdAt: string;
        forceByPassGoogleLightHouse: boolean;
        imageLazyLoad: boolean;
        lazyLoad: boolean;
        nativeImageLazyLoad: boolean;
        showPageOutline: boolean;
        trackingIDs: any[];
        updatedAt: string;
        useThemeJQ: boolean;
        hideHeaderFooter: boolean;
        published: boolean;
        publishedTemplateAt: any;
        autoSave: boolean;
        showLinkToLogin: any;
    };
    createdAt: string;
    customCSS: string;
    customJS: string;
    deletedAt: any;
    datasources: ({
        id: string;
        type: string;
        accessToken: string;
        dataset?: undefined;
    } | {
        id: string;
        type: string;
        dataset: {
            name: string;
            description: string;
            image: string;
            link: string;
        }[];
        accessToken?: undefined;
    })[];
    items: ({
        _id: string;
        __v: number;
        children: string[];
        createdAt: string;
        styles: any[];
        type: string;
        updatedAt: string;
        data?: undefined;
        dataSourceId?: undefined;
        dataBinding?: undefined;
    } | {
        _id: string;
        __v: number;
        children: string[];
        createdAt: string;
        data: {
            doubling: boolean;
            cols: {
                all: number;
                laptop: number;
                tablet: number;
                mobile: number;
            };
            equals: boolean;
            size?: undefined;
            tablet?: undefined;
            laptop?: undefined;
            value?: undefined;
            src?: undefined;
            naturalWidth?: undefined;
            naturalHeight?: undefined;
            placeholder?: undefined;
            href?: undefined;
            clickAction?: undefined;
            openNewTab?: undefined;
        };
        styles: any[];
        type: string;
        updatedAt: string;
        dataSourceId?: undefined;
        dataBinding?: undefined;
    } | {
        _id: string;
        __v: number;
        children: string[];
        createdAt: string;
        data: {
            size: number;
            tablet: number;
            laptop: number;
            doubling?: undefined;
            cols?: undefined;
            equals?: undefined;
            value?: undefined;
            src?: undefined;
            naturalWidth?: undefined;
            naturalHeight?: undefined;
            placeholder?: undefined;
            href?: undefined;
            clickAction?: undefined;
            openNewTab?: undefined;
        };
        styles: any[];
        dataSourceId: string;
        type: string;
        updatedAt: string;
        dataBinding?: undefined;
    } | {
        _id: string;
        __v: number;
        children: any[];
        createdAt: string;
        data: {
            value: string;
            doubling?: undefined;
            cols?: undefined;
            equals?: undefined;
            size?: undefined;
            tablet?: undefined;
            laptop?: undefined;
            src?: undefined;
            naturalWidth?: undefined;
            naturalHeight?: undefined;
            placeholder?: undefined;
            href?: undefined;
            clickAction?: undefined;
            openNewTab?: undefined;
        };
        dataBinding: {
            value: string;
            src?: undefined;
            href?: undefined;
        };
        styles: any[];
        type: string;
        updatedAt: string;
        dataSourceId?: undefined;
    } | {
        type: string;
        children: any[];
        data: {
            src: string;
            naturalWidth: number;
            naturalHeight: number;
            doubling?: undefined;
            cols?: undefined;
            equals?: undefined;
            size?: undefined;
            tablet?: undefined;
            laptop?: undefined;
            value?: undefined;
            placeholder?: undefined;
            href?: undefined;
            clickAction?: undefined;
            openNewTab?: undefined;
        };
        dataBinding: {
            src: string;
            value?: undefined;
            href?: undefined;
        };
        _id: string;
        __v?: undefined;
        createdAt?: undefined;
        styles?: undefined;
        updatedAt?: undefined;
        dataSourceId?: undefined;
    } | {
        type: string;
        children: string[];
        _id: string;
        __v?: undefined;
        createdAt?: undefined;
        styles?: undefined;
        updatedAt?: undefined;
        data?: undefined;
        dataSourceId?: undefined;
        dataBinding?: undefined;
    } | {
        type: string;
        children: any[];
        data: {
            value: string;
            doubling?: undefined;
            cols?: undefined;
            equals?: undefined;
            size?: undefined;
            tablet?: undefined;
            laptop?: undefined;
            src?: undefined;
            naturalWidth?: undefined;
            naturalHeight?: undefined;
            placeholder?: undefined;
            href?: undefined;
            clickAction?: undefined;
            openNewTab?: undefined;
        };
        _id: string;
        __v?: undefined;
        createdAt?: undefined;
        styles?: undefined;
        updatedAt?: undefined;
        dataSourceId?: undefined;
        dataBinding?: undefined;
    } | {
        type: string;
        children: any[];
        data: {
            value: string;
            placeholder: string;
            doubling?: undefined;
            cols?: undefined;
            equals?: undefined;
            size?: undefined;
            tablet?: undefined;
            laptop?: undefined;
            src?: undefined;
            naturalWidth?: undefined;
            naturalHeight?: undefined;
            href?: undefined;
            clickAction?: undefined;
            openNewTab?: undefined;
        };
        dataBinding: {
            value: string;
            src?: undefined;
            href?: undefined;
        };
        _id: string;
        __v?: undefined;
        createdAt?: undefined;
        styles?: undefined;
        updatedAt?: undefined;
        dataSourceId?: undefined;
    } | {
        type: string;
        children: string[];
        data: {
            href: string;
            clickAction: string;
            openNewTab: boolean;
            doubling?: undefined;
            cols?: undefined;
            equals?: undefined;
            size?: undefined;
            tablet?: undefined;
            laptop?: undefined;
            value?: undefined;
            src?: undefined;
            naturalWidth?: undefined;
            naturalHeight?: undefined;
            placeholder?: undefined;
        };
        dataBinding: {
            href: string;
            value?: undefined;
            src?: undefined;
        };
        _id: string;
        __v?: undefined;
        createdAt?: undefined;
        styles?: undefined;
        updatedAt?: undefined;
        dataSourceId?: undefined;
    } | {
        type: string;
        children: any[];
        data: {
            value: string;
            placeholder: string;
            doubling?: undefined;
            cols?: undefined;
            equals?: undefined;
            size?: undefined;
            tablet?: undefined;
            laptop?: undefined;
            src?: undefined;
            naturalWidth?: undefined;
            naturalHeight?: undefined;
            href?: undefined;
            clickAction?: undefined;
            openNewTab?: undefined;
        };
        _id: string;
        __v?: undefined;
        createdAt?: undefined;
        styles?: undefined;
        updatedAt?: undefined;
        dataSourceId?: undefined;
        dataBinding?: undefined;
    })[];
    pageflyVersion: string;
    selectedFonts: {
        Pacifico: {
            "400": number;
            "500": number;
        };
        Roboto: {
            "400": number;
        };
        "Source Sans Pro": {
            "400": number;
        };
        Quicksand: {
            "400": number;
            "700": number;
        };
        "Playfair Display": {
            "400": number;
        };
        Lato: {
            "400": number;
        };
        "Open Sans": {
            "400": number;
        };
        "Aguafina Script": {
            "400": number;
        };
    };
    shopDomain: string;
    shopifyPage: {
        _id: string;
        __v: number;
        collections: any[];
        products: any[];
        selectedTags: any[];
        created_at: string;
        handle: string;
        id: string;
        published_at: string;
        setAll: boolean;
        shop_id: string;
        template_suffix: string;
        title: string;
        updated_at: string;
        blogId: any;
    };
    status: string;
    styles: {
        _id: string;
        __v: number;
        createdAt: string;
        styles: string;
        type: string;
        updatedAt: string;
    }[];
    title: string;
    type: string;
    updatedAt: string;
    allCss: string;
    header: string;
    html: string;
    preview: string;
    publishedHtml: string;
    publishedAt: string;
};
export default function PageFlyPage({ accessToken, pageData }: any): JSX.Element;

//# sourceMappingURL=types.d.ts.map
