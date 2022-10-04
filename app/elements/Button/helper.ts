export interface IActions {
    clickAction?: string
    href: string
    linkTarget: string
    section: string
    mailTo: string
    phone: string
    popupContent: string
    popupWidth: string
    popupHeight: string
    popupAnimation: string
    youtubeData: any
    htmlVideoData: any
    vimeoData: any
    shopifyPageData: any
    popupImageData: any
  }
  
  export const defaultActionProps: IActions = {
    // clickAction: 'none',
    href: '',
    linkTarget: '_self',
    section: '',
    mailTo: '',
    phone: '',
    popupContent: 'youtube',
    popupWidth: '854px',
    popupHeight: '480px',
    youtubeData: {
      src: '',
      loop: false,
      autoplay: false,
      controls: false,
      mute: false,
      videoID: 'PtZir36SIMk',
    },
    htmlVideoData: {
      src: '',
      loop: false,
      autoplay: false,
      controls: false,
      mute: false,
    },
    vimeoData: {
      src: '',
      ratio: 56.25,
      loop: false,
      portrait: false,
      byline: false,
      title: false,
      autoplay: false,
      controls: true,
      mute: false,
    },
    shopifyPageData: {
      url: '',
      title: '',
    },
    popupImageData: {
      src: '',
      alt: '',
      title: '',
      objectFit: 'contain',
      objectPosition: 'center center',
    },
    popupAnimation: '',
  }
  