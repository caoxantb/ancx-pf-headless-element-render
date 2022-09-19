/**
 * Remove null, undefined, '', {}
 * @param obj: Object
 */
export const removeFalsy = (obj: {[key: string]: any}): any => {
    if (!obj || typeof obj !== 'object') {
        return obj
    }
    const newObj : {[key: string]: any} = {}
    Object.keys(obj).forEach(prop => {
        if (obj[prop] !== '' && obj[prop] !== null && obj[prop] !== undefined && JSON.stringify(obj[prop]) !== '{}') {
            newObj[prop] = typeof obj[prop] === 'object' && !Array.isArray(obj[prop]) ? removeFalsy(obj[prop]) : obj[prop]
        }
    })
    return newObj
}

export default removeFalsy
