import React from 'react'
import {cloneElement, FunctionComponent, ReactElement} from 'react'

const NullElement = () => <div />

export const enhanceElement = (comp: FunctionComponent<any> = NullElement) => {
    return function EnhancedComponent(props : any) {
        const realElement = comp(props) as ReactElement

        const {
            store: {
                options,
                // data: {className: cN, animationHover},
                count
            }
        } = props
        const className = realElement?.props?.className

        const { hideOnDesktop, hideOnLaptop, hideOnTablet, hideOnMobile } = options || {}
        const hideOnClasses =
            (hideOnDesktop ? ' pf-lg-hide' : '') +
            (hideOnLaptop ? ' pf-md-hide' : '') +
            (hideOnTablet ? ' pf-sm-hide' : '') +
            (hideOnMobile ? ' pf-hide' : '')

        const enhancedProps = {
            ...realElement?.props,
            // id: id || undefined,
            className: `pf-${count}_` +
                (className ? ` ${className}` : '') +
                hideOnClasses,
        }

        return realElement ? cloneElement(realElement, enhancedProps) : null
    }
}

