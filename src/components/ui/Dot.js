import styled from 'styled-components'

const Dot = styled.div`
  border-radius: 50%;
  border: solid 1px #FFF;
  height: 7px;
  width: 7px;
  margin: 4px;
  box-sizing: border-box;
  cursor: pointer;

  background: ${props => props.active ? '#FFF' : ''}
`

export default Dot
