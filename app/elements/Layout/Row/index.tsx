import React from 'react'
import styled from 'styled-components'

import {styleVariableByDevices} from "../../../utilities/media-query-css"
import {getItemSpacing} from "../../../utilities/get-item-spacing"

const Row = (props : any) => {
    let {
        store: {
            data: {
                gutter,
                align,
                stretch,
                equals,
                cols
            },
            type
        },
        children
    } = props

    align = align !== 'lt' ? ` pf-c-${align}` : ''
    let stretchClass = stretch ? ' pf-r-eh' : ''
    const className = `pf-r${align}${stretchClass}`
    const style = {
        ...styleVariableByDevices(getItemSpacing(gutter), 's'),
    }

    return <StyledRow className={className} style={style} data-pf-type={type}>
        {children}
    </StyledRow>
}

Row.defaultProps = {
    align: 'lt',
    doubling: true,
    reversed: false,
    stackable: false,
    stretch: true,
    spacing: 30,
    gutter: { all: '30px', laptop: '30px', tablet: '30px', mobile: '30px' },
    cols: { all: 12, laptop: 12, tablet: 2, mobile: 1 }
}

const StyledRow = styled.div<{}>``


export default Row