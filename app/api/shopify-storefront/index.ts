import { getDataFromStorefront } from './query'
import {useEffect, useState} from 'react'

const storefrontApiVersion = '2022-07'

export const plugStorefrontData = ({storeDomain, storefrontToken}: Record<string, any>) => {
    const [data, setData] = useState<Record<string, any>>({})

    useEffect(() => {
        (async () => {
            const data = await getDataFromStorefront(
                {
                    storeDomain,
                    storefrontApiVersion,
                    storefrontToken
                },
                QUERY_LIST_PRODUCT
            )()
            setData(data)
        })()
    },[])

    return {data}
}

const QUERY_LIST_PRODUCT = `
    {
        products(first: 5) {
            edges {
                node {
                    title
                    description
                    featuredImage {
                        url
                    }
                }
            }
        }
    }
`

