function hexToBase64(hex: string) {
    let out = ''
    const arr : any = hex.split('')
    while (arr.length) out += String.fromCharCode(parseInt(arr.shift() + arr.shift()) , 16)

    if(typeof window !== 'undefined') {
        return window.btoa(out).replace(/[=]+/g, '').replace(/\//g, '_').replace(/\+/g, '-')
    }

    return Buffer.from(hex, 'hex').toString('base64')
}

export function base64IDfromHex(hex: string) {
    return hexToBase64(hex.replace(/^(\w+)-(\w+)-.*$/, '$1$2'))
}

