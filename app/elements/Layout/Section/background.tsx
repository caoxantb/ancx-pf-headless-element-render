import React, { RefObject } from "react";
import { BodyBackgroundVideo } from "./body-background-video";
import { StyledBGVideo, StyledParallax } from "./styled";

interface BackgroundInterface {
  parallaxBg?: string;
  videoBg?: string;
  bgType?: string;
  mode?: string;
  selectorName?: any;
  filterColor?: string;
  muted?: string;
}

export default function Background(props: BackgroundInterface) {
  let videoRef: RefObject<HTMLVideoElement> = React.createRef();
  const { videoBg, bgType, parallaxBg } = props;

  let videoType, video
  const autoPlay = 1
  if (videoBg && bgType === 'video') {
    switch (true) {
      case videoBg.toLowerCase().includes('.mp4'):
        videoType = 'mp4'
        break
      case videoBg.includes('vimeo'):
        videoType = 'vimeo'
        break
      case videoBg.includes('youtube'):
        videoType = 'youtube'
        break
      default:
        videoType = undefined
    }
    video = videoType && BodyBackgroundVideo(videoType, { videoRef, autoPlay, videoBg })
  }

  return (
    <>
      {bgType === 'parallax' && parallaxBg && (
        <StyledParallax
          src={parallaxBg}
          className="pf-parallax-img"
          alt="parallax"
          loading="lazy"
          width={1920}
          height={800}
          style={{ opacity: 0 }}
        />
      )}
      {bgType === 'video' && <StyledBGVideo>{videoBg && videoType ? video : null}</StyledBGVideo>}
    </>
  )
}
