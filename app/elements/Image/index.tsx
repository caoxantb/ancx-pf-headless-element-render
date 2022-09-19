
import React from 'react'

import { StyledImage } from './styled'

export type RatioImageType = 'original' | 'square' | 'custom'
interface IProps {
  src: string
  alt: string
  title: string
  fullWidth: { all: boolean; laptop: boolean; tablet: boolean; mobile: boolean }
  ratio: { all: RatioImageType; laptop: RatioImageType; tablet: RatioImageType; mobile: RatioImageType }
  store: any
  naturalWidth: number
  naturalHeight: number
}

const placeholder = 'placeholder/img-placeholder-illustration.svg'

Image.defaultProps = {
  name: 'image',
  src: '',
  fullWidth: { all: true, laptop: true, tablet: true, mobile: true },
  naturalWidth: 0,
  naturalHeight: 0,
  ratio: { all: 'original', laptop: 'original', tablet: 'original', mobile: 'original' }
}

function Image(props: IProps) {
  const {
    store: { mode },
    store,
    title,
    naturalWidth,
    naturalHeight
  } = props
  let imageRef: React.RefObject<HTMLImageElement> = React.createRef()

  const renderPicture = () => {
    const { title, alt, src } = store.data
    const placeholderStyle: any = {
      objectFit: 'contain',
      background: '#e8eaed',
      border: '1px solid var(--pf-border-color)',
      borderRadius: '2px',
      maxHeight: '60vh',
    }
    return (
      <img
        ref={imageRef}
        src={src}
        width={naturalWidth}
        height={naturalHeight}
        alt={alt}
        title={title}
        onError={e => {
          const imgEl: any = e.currentTarget
          imgEl.src = mode === 'view' ? '' : placeholder
          imgEl.onerror = null
          mode !== 'view' && Object.assign(imgEl.style, placeholderStyle)
          return true
        }}
        style={!src ? placeholderStyle : undefined}
      />
    )
  }
  const ImageWrapper: any = StyledImage

  // if (mode === 'view' && clickAction && clickAction !== 'none') {
  return (
    <ImageWrapper title={title}>
      {renderPicture()}
    </ImageWrapper>
  )
  // }

  // return renderPicture()
}

export default Image
