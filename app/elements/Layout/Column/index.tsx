import React from 'react'
import styled from 'styled-components'

import { enhanceElement } from '../../../stores/enhance-element'

const fixSize = (s: any) => {
    s = Number(s)
    return s < 0 ? 0 : s > 12 ? 12 : s
}

const Column = (props: any) => {
    const {
        children
    } = props

    return <StyledCol>{children}</StyledCol>
}

const EnhancedColumns = enhanceElement(Column)

const EnhancedColumn = (props: any) => {
    const {store} = props
    const {
        data: {
            mobile, tablet, laptop, size, hideOnMobile, hideOnLaptop, hideOnTablet, hideOnDesktop
        }
    } = store

    let columnWidth : {[key: string]: any}
    const xs = fixSize(mobile)
    const sm = fixSize(tablet)
    const md = fixSize(laptop)
    const lg = fixSize(size)

    columnWidth = xs
        ? {
            '--c-xs': xs,
        }
        : {}
    sm && sm !== xs && (columnWidth['--c-sm'] = sm)
    md && (columnWidth['--c-md'] = md)
    lg && (columnWidth['--c-lg'] = lg)
    const hideOnClasses =
        (hideOnDesktop ? ' pf-lg-hide' : '') +
        (hideOnLaptop ? ' pf-md-hide' : '') +
        (hideOnTablet ? ' pf-sm-hide' : '') +
        (hideOnMobile ? ' pf-hide' : '')

    return (
        <div className={`pf-c${hideOnClasses}`} style={columnWidth}>
            <EnhancedColumns store={store} {...props}/>
        </div>
    )
}

const StyledCol = styled.div`
  position: relative;
  &:empty {
    display: initial;
  }
`

export default EnhancedColumn


