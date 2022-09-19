import styled from 'styled-components'

export const StyledButton = styled.a<any>`
  display: inline-block;
  line-height: 1;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  outline: 0;
  i {
    ${p => p.iconPos === 'left' && 'margin-right: 5px;'}
    ${p => p.iconPos === 'right' && 'margin-left: 5px;'}
		${p => p.iconPos === 'top' && 'margin-bottom: 5px;display: block;'}
  }
  span {
    color: inherit;
  }
`
