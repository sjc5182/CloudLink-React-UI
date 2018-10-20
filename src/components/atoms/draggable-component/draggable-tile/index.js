import React from 'react'

export default class DraggableTileComponent extends React.Component{
  render() {
    return(
      <div className='draggable-tile-container'>
        <div className='draggable-tile-status-bar'></div>
        <div className='draggable-tile-detail-container'>
          <div className='draggable-tile-order-reference'>#1231231</div>
          <div className='draggable-tile-order-date'>{`Order Date: April 23, 2018`}</div>
          <div className='draggable-tile-status-container'>
            <div>Order Status: </div>
            <div className='draggable-tile-status'>Open</div>
          </div>
        </div>
      </div>
    )
  }
}
