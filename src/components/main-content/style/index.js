import styled from 'styled-components'
import { color, grid } from '../../../globals/'

export const MainContentStyle = styled.div`
  height:100%;
  width:100%;
  background-color:${color.grey};
  display:flex;
  flex-direction:column;
  padding-left: ${grid.scale(3)};
  padding-top: ${grid.scale(4)};
`
