import styled from 'styled-components'
import { font, grid, color } from '../../../../globals/'

export const TopBarStyle = styled.div`
  display:grid;
  grid-template-columns:85% 8% 7%;
  font-family: ${font.normal};
  .user-sign-up, .user-login {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:${grid.scale(1.75)};
    color:${color.lightgrey};
    margin: ${grid.scale(1.5)} ${grid.scale(1.5)} 0 0;
    padding: ${grid.scale(0.75)}; 
    border: 1px solid ${color.lightgrey};
    border-radius: ${grid.half};
    cursor:pointer;
    :hover{
      border: 1px solid ${color.hover};
      color: ${color.hover};
    }
  }
`
