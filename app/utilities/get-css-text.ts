function getDeviceCss(device, deviceCss) {
  switch(device) {
    case 'mobile': 
      return `${deviceCss}`
    case 'tablet':
      return `@media (min-width: 768px) {${deviceCss}}`
    case 'laptop':
      return `@media (min-width: 1025px) {${deviceCss}}`
    case 'all':
      return `@media (min-width: 1200px) {${deviceCss}}`
  }
}

export function getCssText(elementStore, pageData) {
  pageData.styles.forEach((data) => {
    const styleId = elementStore.get(data._id).styleId;
    data.styles = data.styles.replaceAll('&', `.pf-${styleId}_`);
  });

  let bigString = ''

  ;['mobile', 'tablet', 'laptop', 'all'].forEach(device => {
    let smallString = ''
    pageData.styles.forEach(data => {
      const parsedData = JSON.parse(data.styles)
      if(parsedData[device]) {
       Object.entries(parsedData[device]).forEach(
          ([key, value]) => smallString = `${smallString}${key}{${value}}`
        );
      }
    })
    let deviceCss = getDeviceCss(device, smallString)
    bigString += deviceCss
  })
  
  return bigString
}