import React, { useEffect, useState } from "react";
import { getVideoId } from "../../../utilities/click-action";

interface IProps {
  videoRef: any;
  autoPlay: number;
  videoBg: string;
  mode: string;
}

const VimeoDOM = (props: IProps) => {
  const { autoPlay, videoBg, videoRef } = props;

  return (
    <iframe
      title="video_vimeo"
      src={`https://player.vimeo.com/video/${getVideoId(
        videoBg
      )}?api=1&loop=1&muted=1&controls=0&portrait=0&byline=0&title=0&background=1&autoplay=${autoPlay}`}
      frameBorder="0"
      allowFullScreen
      allow="autoplay"
      data-muted="true"
      loading="lazy"
    />
  );
};

const Mp4DOM = (props: IProps) => {
  const { videoRef, videoBg } = props;
  const defaultVideoBg = "https://www.youtube.com/watch?v=tsjd7xdgfjA";
  return (
    <video
      ref={videoRef}
      src={videoBg || defaultVideoBg}
      autoPlay={true}
      loop={true}
      playsInline={true}
      muted={true}
    />
  );
};

const YoutubeDOM = (props: IProps) => {
  const { autoPlay, videoBg, mode } = props;

  return (
    <iframe
      title="video_youtube"
      // use this opacity for hide youtube video on mobile before it loaded
      style={{ opacity: 0 }}
      src={`https://www.youtube.com/embed/${getVideoId(
        videoBg
      )}?enablejsapi=1&mute=1&loop=1&playlist=${getVideoId(
        videoBg
      )}&controls=0&rel=0&showinfo=0&autoplay=${autoPlay}`}
    />
  );
};

const VideoBgByType = {
  mp4: Mp4DOM,
  youtube: YoutubeDOM,
  vimeo: VimeoDOM,
};

export const BodyBackgroundVideo = (type, props) => {
  const Component = VideoBgByType[type];
  return <Component {...props} />;
};
