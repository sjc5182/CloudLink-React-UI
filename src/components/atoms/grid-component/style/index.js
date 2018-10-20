import styled from 'styled-components'
import { font, color, grid } from '../../../../globals/'

export const GridComponentStyle = styled.div`
  display: flex;
  flex-direction:column;
  border-right: 1px solid black;
  width:${grid.scale(62.5)};
  height:100%;
  margin-top: ${grid.scale(3)};
  padding-right: ${grid.scale(1.5)};
  font-family: ${font.normal};
  .grid-header{
    width: ${grid.scale(62.5)};
    display: flex;
    justify-content: space-between;
    color:${color.white};
    background-color: ${color.dark};
    padding: ${grid.scale(1.25)};
    border-top-left-radius:${grid.scale(.75)};
    border-bottom-left-radius: ${grid.scale(.75)};
    .grid-header-info{
      display:flex;
      width:${grid.scale(17.75)};
      justify-content: space-between;
      font-size:${grid.scale(2.5)};
      i {
        font-size:${grid.scale(2.5)};
      }
    }
  }
  .grid-folder-container{
    display:flex;
    flex-direction:column;
    margin-top: ${grid.scale(1.5)};
    .grid-folder{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      color:${color.lightgrey};
      background-color:${color.lightgreyPlus};
      margin-top:${grid.scale(.75)};
      border-radius:${grid.half};
      margin-right:${grid.half};
      font-size: ${grid.scale(2.5)};
      i{
        font-size: ${grid.scale(2.5)};
      }
      .grid-foler-info{
        display:flex;
        justify-content: space-between;
        padding:${grid.scale(1.25)};
      }
      .grid-folder-item-container{
        display:flex;
        flex-direction:column;
        background-color:${color.lightgreyPlus2};
        height:auto;
        padding: 0 ${grid.half};
        border-radius: ${grid.half};
        .grid-folder-item-wrapper{
          padding: ${grid.half};
          .grid-sub-folder-item{
            display:flex;
            justify-content:space-between;
            border-radius:${grid.half};
            margin: ${grid.half} 0;
            background-color:${color.lightgreyPlus};
            padding:${grid.scale(.75)};
            .grid-sub-folder-item-info-container{
              display:flex;
              font-size: ${grid.scale(1.5)};
              i{
                font-size:${grid.scale(1)};
              }
              .grid-folder-item-status-bar{
                width:${grid.half};
                height:auto;
                border-radius: ${grid.quarter};
                background-color:${color.open};
              }
            }
            .grid-folder-item-order-list-container{
              display:grid;
              grid-template-columns: 40% 10% 25% 20% 5%;
              border-bottom:1px solid ${color.dark};
              border-radius:${grid.half};
              .del-icon {
                color: red;
              }
            }
          }
        }
        .grid-purchase-sum{
          display:grid;
          grid-template-columns: 25% 25% 25% 20% 5%;
          border-radius:${grid.half};
        }
      }
    }
    
  }
`



