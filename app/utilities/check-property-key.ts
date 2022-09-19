/**
 * @author: Leopold
 * Function check nest key is passed into data
 *
 * @param obj
 * @param propPath
 */

export const checkPropertyKey = (obj: Record<string, any>, propPath: string) => {
    const keys = propPath.split('.')
    let value = obj

    for(let i = 0; i < keys.length; i++) {
        if(value[keys[i]] === undefined){
            return {exist: false}
        }

        value = value[keys[i]]
    }

    return {exist: true, value}
}