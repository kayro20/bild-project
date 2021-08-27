import styled from 'styled-components';

const Title = styled.h1`
  ${({ theme }) => `
    font-size: 32px;
    margin: 0 0 4px 0;
    color: ${theme.palette.black};
    font-family: 'DM Sans', sans-serif`
  }
`

export default Title
