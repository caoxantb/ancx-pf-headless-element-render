import removeFalsy from './remove-falsy'

export function styleVariableByDevices(data: { [p: string]: any }, alias: string) {
    const { mobile: xs, tablet: sm, laptop: md, all: lg } = data

    const smCode = sm === xs ? {} : { [`--${alias}-sm` as any]: sm }
    const mdCode = md === sm ? {} : { [`--${alias}-md` as any]: md }
    const lgCode = lg === md ? {} : { [`--${alias}-lg` as any]: lg }
    return removeFalsy({
        [`--${alias}-xs` as any]: xs,
        ...smCode,
        ...mdCode,
        ...lgCode,
    })
}