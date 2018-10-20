import React from 'react'
import { Icon } from 'semantic-ui-react'
import ScrollBar from 'react-custom-scrollbars'
import { GridComponentStyle } from './style/'
import FolderComponent from './folder/'

export default class GridComponent extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const { clientFolderList: { clientFolders } } = this.props
    return (
      <GridComponentStyle>
        <div className='grid-header'>
          <div className='grid-header-info'>
            <Icon name='cart' />
            <span>Sales Order</span>
          </div>
          <Icon name='add circle' className='grid-header-button'/>
        </div>
        <ScrollBar 
          className='grid-folder-container'
          autoHeightMax={800}
          autoHeight={true}
          autoHide={true}
          >
          {clientFolders.map((clientFolder, index) => {
            return <FolderComponent 
                    clientFolder={clientFolder}
                    key={index}/>})} 
        </ScrollBar>
      </GridComponentStyle>
    )
  }
}
