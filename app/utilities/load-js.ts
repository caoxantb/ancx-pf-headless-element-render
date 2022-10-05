export function loadJS(
  src: string,
  target: HTMLElement = document.body,
  async = true,
  defer = false
) {
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    if (doc.querySelector(`script[src="${src}"]`)) {
      return resolve(true);
    }
    const script = doc.createElement("script");
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.onload = resolve;
    script.onerror = reject;
    target.appendChild(script);
  });
}
