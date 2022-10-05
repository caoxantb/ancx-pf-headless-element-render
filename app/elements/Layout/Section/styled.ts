import styled from 'styled-components'

export const StyledParallax = styled.img<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.15s;
`

export const StyledBGVideo = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  > * {
    border: 0;
    outline: none;
    width: 100vw;
    min-width: 177.77vh;
    height: 56.25vw;
    min-height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const Container = styled.div``
export const StyledSection = styled.div`
  & {
    padding: 20px 0;
    position: relative;
  }
`
export const StyledOverlay = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--overlay);
  pointer-events: none;
  position: absolute;
  overflow: hidden;
`
