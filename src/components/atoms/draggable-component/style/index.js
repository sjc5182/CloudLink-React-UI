import styled from 'styled-components'
import { font, color, grid } from '../../../../globals/'

export const DraggableComponentStyle = styled.div`
  display:flex;
  margin: ${grid.scale(3)} 0 0 ${grid.scale(3)};
  border-right: 1px solid ${color.dark};
  .draggable-component-column{
    display:flex;
    flex-direction:column;
    padding: 0 ${grid.scale(3)};
    border-left: 1px solid ${color.dark};
    .draggable-component-header-wrapper{
      text-align:center;
      padding: ${grid.scale(1.5)}, ${grid.scale(2)};
      background-color: ${color.dark};
      color: ${color.white};
      border-radius: ${grid.scale(.75)};
      width: ${grid.scale(22.5)};
    }
    .draggable-component-wrapper{
      .draggable-tile-container{
        display:flex;
        background-color: ${color.lightgreyPlus};
        padding:${grid.half};
        margin-top: ${grid.scale(3)};
        border-radius: ${grid.scale(.75)};
        font-size:${grid.scale(1.5)};
        .draggable-tile-status-bar{
          height:auto;
          width:${grid.half};
          background:${color.open};
        }
        .draggable-tile-detail-container{
          display:flex;
          flex-direction:column;
          margin-left:${grid.scale(1)};
          width:100%;
          .draggable-tile-status-container{
            display:flex;
            justify-content:flex-end;
          }
        }
      }
    }
  }
`
