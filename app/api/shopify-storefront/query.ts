const graphqlBody = (query: string, variables?: Record<string, any>) => {
    return JSON.stringify({
        query,
        variables
    })
}

export const getDataFromStorefront = ({storeDomain, storefrontApiVersion, storefrontToken}: {[key: string]: string}, query : string, variables?: Record<string, any>) => {
    return async () => {
        const response = await fetch(`https://${storeDomain}/api/${storefrontApiVersion}/graphql.json`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Shopify-Storefront-Access-Token': storefrontToken
            },
            body: graphqlBody(query, variables)
        })

        if(!response.ok){
            throw new Error('There is something wrong')
        }

        return response.json()
    }
}