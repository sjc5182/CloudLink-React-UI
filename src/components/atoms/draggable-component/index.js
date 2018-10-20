import React from 'react'
import DraggableTile from './draggable-tile/'
import { DraggableComponentStyle } from './style/'

export default class DraggableComponent extends React.Component {
  render() {
    const headerList = ['Open Order', 'Processed Order', 'Delivered']
    return (
      <DraggableComponentStyle>
        <div className='draggable-component-column open-order'>
          <div className='draggable-component-header-wrapper'>Open Order</div>
          <div className='draggable-component-wrapper'>
            <DraggableTile />
            <DraggableTile />
            <DraggableTile />
          </div>
        </div>
        <div className='draggable-component-column processed-order'>
          <div className='draggable-component-header-wrapper'>Processed Order</div>
          <div className='draggable-component-wrapper'>
          </div>
        </div>
        <div className='draggable-component-column delivered'>
          <div className='draggable-component-header-wrapper'>Delivered</div>
          <div className='draggable-component-wrapper'>
          </div>
        </div>
      </DraggableComponentStyle>
    )
  }
}