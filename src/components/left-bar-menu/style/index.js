import styled from 'styled-components'
import { grid, color, font } from '../../../globals/'

export const LeftBarStyle = styled.div`
  height:100%;
  width: ${grid.scale(8.75)};
  background-color:${color.dark};
  display:flex;
  flex-direction:column;
  .left-bar-menu-brand-container{
    font-family:${font.bold};
    font-size:${grid.scale(3)};
    color:${color.white};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-grow:1.5;
    padding: ${grid.scale(1.5)}, ${grid.scale(1.5)};
  }
  .left-bar-menu-navigation-container{
    flex-grow:8;
    font-family: ${font.bold};
    .side-bar-button-item{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      border-radius:${grid.half};
      font-size:${grid.scale(1.25)};
      color:${color.lightgrey};
      padding: ${grid.scale(1.5)} 0;
      cursor:pointer;
      transition: background-color 0.75s ease, border-left 0.1s ease, color 0.75s ease;
      i {
        font-size:${grid.scale(2)};
        width:${grid.scale(5)};
      }
      &.active{
        background-color:${color.grey0};
        color:${color.purple};
      }
      :hover{
        color: ${color.hover};
      }
    }
  }
  .left-bar-menu-profile-container{
    flex-grow:4;
  }
  .left-bar-menu-control-container{
    flex-grow:2;
  }
`
