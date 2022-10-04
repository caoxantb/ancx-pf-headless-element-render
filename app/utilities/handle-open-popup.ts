function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function serializeArray(data) {
  let arr = [];
  for (let [key, value] of data) {
    arr.push({ name: key, value });
  }
  return arr;
}

function pageflyPost(path, params, method = "post") {
  const form = document.createElement("form");
  form.method = method;
  form.action = path;
  params.forEach(function (field) {
    const hiddenField = document.createElement("input");
    hiddenField.type = "hidden";
    hiddenField.name = field.name;
    hiddenField.value = field.value;
    form.appendChild(hiddenField);
  });
  document.body.appendChild(form);
  form.submit();
}

function getOriginalSrc(src) {
  if (!src.includes("https://cdn.shopify.com") || !src.includes("&resized")) {
    return src;
  }

  let head = src.slice(0, src.lastIndexOf("_"));
  let tail = src.split(".")[src.split(".").length - 1];
  return `${head}.${tail}`;
}

async function getHttpRequest(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onload = () =>
      req.status === 200
        ? resolve(req.response)
        : reject(Error(req.statusText));
    req.onerror = (e) => reject(Error(`Network Error: ${e}`));
    req.send();
  });
}

export async function handleOpenPopup(e) {
  e.preventDefault()
  e.stopPropagation()
  const popupModal = document.querySelector(".pf-m") as HTMLElement;
  const iframe = document.createElement("iframe");
  setAttributes(iframe, {
    width: "100%",
    height: "100%",
    "data-pagefly-popup": true,
    allowfullscreen: "allowfullscreen",
  });
  const target = e.currentTarget as any
  const { src, width, height, popupAnimation, popupContent } = target.dataset
  if (!src) {
    return
  }
  if (popupContent === 'image') {
    let { imagePopupObjFit, imagePopupAlt, imagePopupTitle, imagePopupObjPosition } = target.dataset

    const image = document.createElement('img')
    let imageAttributes = {
      src: getOriginalSrc(src),
      style: `width: 100%; height: 100%; display: block; margin: auto; object-fit: ${imagePopupObjFit}; object-position: ${imagePopupObjPosition}`,
    }
    if (imagePopupAlt) imageAttributes['alt'] = imagePopupAlt
    if (imagePopupTitle) imageAttributes['title'] = imagePopupTitle
    setAttributes(image, imageAttributes)
    popupAnimation && (image.className = `pf-animated ${popupAnimation}`)
    popupModal.append(image)
  } else if (popupContent === 'youtube' || popupContent === 'vimeo') {
    popupModal.append(iframe)
    setAttributes(iframe, { src: src })
  } else if (popupContent === 'video') {
    // Create and Add video to modal in click action
    let { muted, loop, controls, autoplay, src } = target.dataset
    const video = document.createElement('video')
    setAttributes(video, { width: '100%', height: '100%' })
    video.classList.add('pf-html5-video')
    popupModal.append(video)
    e.preventDefault()
    e.stopPropagation()
    autoplay = autoplay === 'true'
    controls = controls === 'true'
    loop = loop === 'true'
    muted = muted === 'true'
    popupModal.style.cssText = 'visibility: visible; width: 650px; height: 450px;'
    setAttributes(video, { src: src })
    controls && setAttributes(video, { controls: '' })
    if (autoplay) {
      video.play()
    }
    video.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      const target = e.currentTarget as HTMLElement
      if (target.hasAttribute('controls') === false) {
        if (video.paused) {
          video.play()
        } else {
          video.pause()
        }
      }
    })
    loop && setAttributes(video, { loop: '' })
    video.muted = muted
  } else if (popupContent === 'shopify') {
    let useSrcDoc = false
    let eventAdded = false

    let html = await getHttpRequest(src)

    const addIframeEvent = () => {
      if (eventAdded && !useSrcDoc) {
        return
      }
      console.log('addIframeEvent', iframe.contentDocument)
      eventAdded = true
      const iframeDoc = iframe.contentDocument
      // const iframeWin = iframe.contentWindow
      const forms = iframeDoc.querySelectorAll('form')
      forms.forEach(form => {
        form.addEventListener('submit', function (e) {
          e.preventDefault()
          pageflyPost(form.getAttribute('action'), serializeArray(new FormData(form)))
        })
      })

      const links = iframe.contentDocument.querySelectorAll('a')
      links.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault()
          const target = e.currentTarget as HTMLElement
          console.log('redirect', target)
          const href = target.getAttribute('href')
          const t = target.getAttribute('target')
          if (href) {
            if (t === '_blank') {
              window.open(href)
            } else {
              window.location.href = href
            }
          }
        })
      })
    }

    iframe.onload = e => {
      console.log('iframe load', e, iframe.contentDocument)
      if (!iframe.contentDocument || !useSrcDoc) {
        setAttributes(iframe, { srcdoc: html })
        useSrcDoc = true
        return
      }
      addIframeEvent()
    }
    popupModal.append(iframe)
    setTimeout(() => {
      console.log('iframe error', e, iframe.contentDocument)
      if (!iframe.contentDocument) {
        setAttributes(iframe, { srcdoc: html })
        useSrcDoc = true
      }
    }, 1000)
  }
  popupModal.style.visibility = 'visible'
  popupModal.style.width = width
  popupModal.style.height = height
  popupAnimation && (iframe.className = `pf-animated ${popupAnimation}`)
}
