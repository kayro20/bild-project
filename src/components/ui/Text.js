import styled from 'styled-components'

const sizes = {
  sm: '14px',
  md: '16px',
  lg: '32px'
}

const Text = styled.span`
  ${({ theme, size, color}) => `
    font-size: ${sizes[size]};
    color: ${theme.palette[color]};
    display: block;
    line-height: 1.5em;
    font-family: 'Montserrat', sans-serif;`
  }
`

export default Text
