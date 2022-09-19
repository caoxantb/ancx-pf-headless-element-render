import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  href: string
  onChange: (changes: any) => void
  value: string
  mode: 'edit' | 'view'
  placeholder: string
  linkInput: string
  linkTarget: string
}

Dropcap.defaultProps = {
  tag: '',
  text: '',
  type: 'Dropcap',
  editable: true,
  selectable: false,
  hasAction: true,
  linkTarget: '_self',
  value: '',
  placeholder: 'D',
}

function useDropcap(props: any) {
  const { store, value } = props

  useEffect(() => {
    store.props.ref.current.innerHTML = value
  }, [store.props.ref, value])

  return { ...props }
}

function Dropcap(props: Props) {
  const {
    placeholder,
    store: {
      mode,
      setData,
      props: { ref },
    },
    value,
  } = useDropcap(props)

  return (
    <TextElement
      onBlur={() => {
        value !== ref.current?.innerHTML && setData({ value: ref.current.innerHTML })
      }}
      suppressContentEditableWarning
      contentEditable={mode === 'edit' ? true : undefined}
      placeholder={mode === 'edit' ? placeholder : undefined}
    >
      {value}
    </TextElement>
  )
}

export default Dropcap

const SpanStyle = css`
  display: inline-block;
  font-size: 3em;
  line-height: 1em;
  // For safari because default is none
  &[contenteditable='true'] {
    user-select: text;
  }
  &[contentEditable='true']:empty:after {
    content: attr(placeholder);
    opacity: 0.5;
    display: inline-block; /* For Firefox */
  }
  &[contentEditable='true']:empty {
    min-height: 1em;
    min-width: 1em;
    line-height: 1em;
  }
  & {
    vertical-align: baseline;
    word-break: break-word;
  }
  &:focus {
    outline: none;
  }
  &:after {
    display: inline;
  }
`
const TextElement = styled.span<any>`
  ${SpanStyle};
  display: block;
  margin-right: 10px;
  float: left;
`
