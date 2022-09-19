import React from 'react'
import styled from 'styled-components'

interface Props {
  dropcap: boolean
}

Paragraph.defaultProps = {
  dropcap: false,
}

function Paragraph(props: any) {
  const { dropcap, children } = props
  const content = [dropcap ? children[0] : null, children[1]]

  return (
    <StyledParagraph
      dropcap={dropcap && children.length === 1 ? false : dropcap}
      className={dropcap && children.length === 1 ? false : dropcap ? `dropcap--${props.dropcapStyle || 'none'}` : ''}
      dropcapColor={props.dropcapColor}
      dropcapBackground={props.dropcapBackground}
      dimensions={props.dimensions}
      dropcapFontSize={props.dropcapFontSize}
    >
      {content}
    </StyledParagraph>
  )
}

export default Paragraph

const StyledParagraph = styled.p<any>`
  & > span:last-child {
    line-height: inherit;
    display: block;
    margin-right: ${p => (p.dropcap ? null : '0 !important')};
  }

  &[class*='dropcap--'] > span:first-child {
    display: block;
    margin-right: 10px;
    float: left;
    color: ${props => props.dropcap && props.dropcapColor};
    width: ${props => (props.dropcap && props.dimensions ? props.dimensions : null)};
    height: ${props => (props.dropcap && props.dimensions ? props.dimensions : null)};
    line-height: ${props => (props.dropcap && props.dimensions ? props.dimensions : null)};
    font-size: ${props => props.dropcap && props.dropcapFontSize};
    background: ${props => props.dropcap && props.dropcapStyle !== 'none' && props.dropcapBackground};
  }

  &.dropcap--circle > span:first-child {
    border-radius: 100%;
  }

  & ol,
  & ul {
    list-style-position: inside;
  }
  & blockquote {
    font-size: inherit;
  }
`
