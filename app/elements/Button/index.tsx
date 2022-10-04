import React, {useContext, useEffect} from 'react'

import { StyledButton } from './styled'
import { getDataForClickAction } from '../../utilities/click-action'
import { defaultActionProps } from './helper'

import { initModal } from '../../utilities/init-modal'
import { handleOpenPopup } from '../../utilities/handle-open-popup'
import { initOverlay, addOverlay, hideOverlay } from '../../utilities/handle-overlay'
import { handleScrollToSection } from '../../utilities/handle-scroll-to-section'


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
  name: 'button',
  ...defaultActionProps,
}

const buttonRef: any = React.createRef()

function Button(props: any) {
  const { children } = props
  const { btnStyle, showIcon, iconPos, href, clickAction } = props.store.data
  const content = [showIcon ? children[0] : null, children[1] || null]
  iconPos === 'right' && content.reverse()
  const buttonData = {...getDataForClickAction(props, true)}

  async function asyncHandleOpenPopup(e) {
    handleOpenPopup(e)
  }

  useEffect(() => {
    if(clickAction === 'popup') {
      initModal(buttonData)
      initOverlay(buttonData)
    }
  }, [])

  useEffect(() => {
    if(buttonRef.current) {
      if(clickAction === 'popup') {
        buttonRef.current.addEventListener('click', async (e) => {
          await asyncHandleOpenPopup(e)
          addOverlay(e)
        })
        const overlay = document.querySelector('.pf-o')
        if (overlay) {
          overlay.addEventListener('click', hideOverlay)
        }
        return () => {
          buttonRef.current.removeEventListener('click', asyncHandleOpenPopup)
          buttonRef.current.removeEventListener('click', addOverlay)
          overlay.removeEventListener('click', hideOverlay)
        }
      } else if(clickAction === 'section') {
        buttonRef.current.addEventListener('click', async (e) => {          
          await handleScrollToSection(e)
        })
        return () => {
          buttonRef.current.removeEventListener('click', handleScrollToSection)
        }
      }
    }
  }, [buttonRef.current])

  return (
    <StyledButton ref={buttonRef} iconPos={iconPos} btnStyle={btnStyle} {...getDataForClickAction(props, true)}>
      {content}
    </StyledButton>
  )
}

export default Button
