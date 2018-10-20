import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class SubFolders extends React.Component {
	render() {
		const { order: { orderID, orderStatus } } = this.props
		return (
			<div className='grid-sub-folder-item'>
				<div className='grid-sub-folder-item-info-container'>
					<Icon name='chevron down' />
					<div className='grid-folder-item-status-bar'></div>
					<span className='grid-folder-item-info'>{orderID}</span>
				</div>
				<div className='grid-sub-folder-item-add-button-container'>
					<Icon name='add circle' />
				</div>
			</div>
		)
	}
}
