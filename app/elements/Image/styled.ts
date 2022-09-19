import styled from 'styled-components'

// export const StyledImage = styled.img`
// 	//height: auto;
// `
export const StyledImage = styled.div<any>`
  display: inline-block;
  max-width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`
export const StyledImageA = StyledImage.withComponent('a')
