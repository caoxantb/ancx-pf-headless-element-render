import React from 'react'

import { StyledButton } from './styled'

export interface IButtonProps {
  value: string
  onChange: (changes: {}) => any
  flag: boolean
  showIcon: boolean
  iconPos: string
  action: string
  btnStyle: string
  btnShape: string
  btnPlain: string
  targetStyle: string
  mode: string
  id?: string
  name?: string
}

Button.defaultProps = {
  value: 'Button',
  btnStyle: 'plain',
  iconPos: 'left',
  targetStyle: '',
  name: 'button'
}

function Button(props: any) {
  const { children } = props
  const { btnStyle, showIcon, iconPos, href } = props.store.data
  const content = [showIcon ? children[0] : null, children[1] || null]
  iconPos === 'right' && content.reverse()
  return (
    <StyledButton iconPos={iconPos} btnStyle={btnStyle} href={href}>
      {content}
    </StyledButton>
  )
}

export default Button
