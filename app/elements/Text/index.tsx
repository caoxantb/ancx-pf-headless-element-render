import React from 'react'

const Text = (props : any) => {
    const {store} = props

    const {data: {value}} = store

    return <span>
        {value}
    </span>
}

export default Text