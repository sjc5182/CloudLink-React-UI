import React from 'react'
import { Icon } from 'semantic-ui-react'
import SubFolders from '../sub-folder'

export default class FolderComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isFolderOpen: false
    }
  }
  handleFolderToggle() {
    this.setState({ isFolderOpen: !this.state.isFolderOpen })
  }
  render() {
    const { clientFolder: {clientName, orders }, handleFolderToggle, isOpen } = this.props
    const { isFolderOpen } = this.state
    return (
      <div className='grid-folder' onClick={this.handleFolderToggle.bind(this)}>
        <div className='grid-foler-info'>
          <div className='grid-folder-detail'>
            <Icon name='folder'/>
            <span>{clientName}</span>
          </div>
          <div className='grid-folder-icon-wrapper'>
            <Icon name='add circle' />
          </div>
        </div>
        <div className='grid-folder-item-container'>
          {isFolderOpen && <div className='grid-folder-item-wrapper'>
            { orders.map((order, index) => {
              return <SubFolders order={order} key={index}/>
            })}
          </div>} 
        </div>
      </div>
    )
  } 
}
