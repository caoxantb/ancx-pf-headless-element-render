export const getVideoId = (src: string): string => {
  if (src) {
    src.match(
      /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/
    );
  }
  return RegExp.$6;
};

export const getDataForClickAction = (props, notData = false) => {
  const {
    clickAction,
    href,
    linkTarget,
    section,
    topOffset,
    phone,
    mailTo,
    src,
    popupContent,
    popupWidth,
    popupHeight,
    popupAnimation,
    youtubeData,
    shopifyPageData,
    vimeoData,
    htmlVideoData,
    popupImageData,
  } = props.store.data;
  let data = null;

  switch (clickAction) {
    case "url": // for old data case
      data = href
        ? notData
          ? { href: href, target: linkTarget }
          : {
              "data-href": href,
              "data-target": linkTarget,
            }
        : {};
      break;
    case "section":
      data = section
        ? {
            "data-to-section": section,
            "data-offset": topOffset
              ? JSON.stringify(topOffset).replaceAll('"', "&quot;")
              : JSON.stringify({
                  all: 50,
                  laptop: 50,
                  tablet: 50,
                  mobile: 50,
                }).replaceAll('"', "&quot;"),
            href: "#",
          }
        : {};
      break;
    case "email":
      data = mailTo
        ? notData
          ? { href: mailTo }
          : { "data-href": mailTo }
        : {};
      break;
    case "phone":
      data = phone
        ? notData
          ? { href: `tel:${phone}` }
          : { "data-href": `tel:${phone}` }
        : {};
      break;
    case "lightbox":
      data = notData ? { href: src } : { "data-href": src };
      break;
    case "popup":
      data = {};
      if (popupContent === "youtube") {
        const {
          autoplay,
          loop,
          mute,
          videoID: defaultVideoID,
          controls,
          src,
          startTime,
          endTime,
        } = youtubeData;
        const videoID =
          src && getVideoId(src) ? getVideoId(src) : defaultVideoID;
        const start = startTime > 0 ? `?start=${startTime}` : "";
        const end =
          endTime > 0 && startTime > 0 && startTime < endTime
            ? `&end=${endTime}`
            : "";
        let params =
          `${start}${end}` +
          `${start ? "&" : "?"}` +
          `&autoplay=${autoplay ? 1 : 0}` +
          `&loop=${loop ? `1&playlist=${videoID}` : "0"}` +
          `&mute=${mute ? 1 : 0}` +
          `&controls=${controls ? 1 : 0}` +
          `&enablejsapi=1`;

        const videoSrc = `https://www.youtube.com/embed/${videoID}${params}`;

        data = {
          "data-popup-content": "youtube", // youtube || shopify
          "data-src": videoSrc,
        };
      } else if (popupContent === "vimeo") {
        const { autoplay, loop, mute, portrait, byline, title, controls, src } =
          vimeoData;
        const params =
          `&autoplay=${autoplay}` +
          `&loop=${loop}` +
          `&mute=${mute}` +
          `&controls=${controls}` +
          `&portrait=${portrait}` +
          `&byline=${byline}` +
          `&title=${title}`;

        const videoId = src && getVideoId(src);
        const videoID = videoId || "334691762";
        const autoplaySetting: { allow?: string } = {};
        autoplaySetting.allow = "autoplay";
        const videoSrc = `https://player.vimeo.com/video/${videoID}?api=1${params}`;
        data = {
          "data-popup-content": "vimeo",
          "data-src": videoSrc,
        };
      } else if (popupContent === "video") {
        const { autoplay, loop, mute, controls, src } = htmlVideoData;
        data = {
          "data-popup-content": "video",
          "data-src":
            src || "https://cdn.pagefly.io/static/video/placeholder.mp4",
          "data-autoplay": autoplay,
          "data-loop": loop,
          "data-controls": controls,
          "data-muted": mute,
        };
      } else if (popupContent === "shopify") {
        const { url } = shopifyPageData;
        const src = url || "";
        data = {
          "data-popup-content": "shopify",
          "data-src": src,
        };
      } else if (popupContent === "image") {
        const { src, title, alt, objectFit, objectPosition } = popupImageData;
        data = {
          "data-popup-content": "image",
          "data-src": src,
          "data-image-popup-obj-fit": objectFit,
          "data-image-popup-obj-position": objectPosition,
        };
        if (title) data["data-image-popup-title"] = title;
        if (alt) data["data-image-popup-alt"] = alt;
      }
      data["data-action"] = "modal";
      data["data-width"] = popupWidth;
      data["data-height"] = popupHeight;
      data["href"] = "#";
      if (popupAnimation) {
        data["data-popup-animation"] = popupAnimation;
      }

      break;
    default:
      data = {};
  }
  return { ...data };
};
