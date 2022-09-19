import React from 'react'

const Heading = (props : any) => {
    const {store: {data}, children} = props
    const {
        showIcon
    } = data || {}

    return <h3>{
        !showIcon ? children.filter((item : any, idx: number) => idx !== 0) : children
    }</h3>
}

export default Heading
