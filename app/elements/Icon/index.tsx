import React from 'react'
import styled from 'styled-components'

export interface IIconProps {
  icon: string
  mode?: string
}

function Icon(props: any) {
  const { icon } = props.store.data

  return <StyledIcon className={`pfa pfa-${icon}`} />
}

Icon.defaultProps = {
  icon: 'star',
  name: 'icon'
}

export default Icon

const StyledIcon = styled.i<any>`
  vertical-align: middle;
  + span {
    vertical-align: middle;
  }
`
