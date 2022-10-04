import React from 'react'
import styled from 'styled-components'

const Section = (props: any) => {
    const {
        children,
        store,
        store: {
            _id
        }
    } = props

    const data = store.data || {}

    const {
        container,
        containerWidth,
        bgType,
        parallaxSpeed,
        filterColor,
    } = data

    const overlayStyle =
        filterColor && filterColor !== 'rgba(0,0,0,0)' ? { [`--overlay` as any]: filterColor } : undefined


    const containerStyle = container
        ? { [`--cw` as any]: isNaN(containerWidth) ? containerWidth : containerWidth + 'px' }
        : undefined

    return <StyledSection
        data-parallax={bgType === 'parallax' || undefined}
        data-parallax-speed={bgType === 'parallax' && parallaxSpeed ? parallaxSpeed : undefined}
        style={{ ...overlayStyle }}
        data-section-id={`pf-${_id.split('-')[1]}`}
    >
        <Container style={containerStyle}>{children}</Container>
    </StyledSection>
}

const StyledSection = styled.div`
  & {
    padding: 20px 0;
    position: relative;
  }
`

export const Container = styled.div``

export default Section
