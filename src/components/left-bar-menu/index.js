import React from 'react'
import { LeftBarStyle } from './style/'
import { Icon } from 'semantic-ui-react'

export default class LeftBarMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeButton: 'home'
    }
  }
  handleClick(button) {
    this.setState({
      activeButton: button
    })
  }
  render() {
    return(
      <LeftBarStyle>
        <div className='left-bar-menu-brand-container'>
          <i className='servicestack icon' />
        </div>
        <div className='left-bar-menu-navigation-container'>
          <div 
            className={`side-bar-button-item ${this.state.activeButton === 'home' && 'active'}`}
            onClick={this.handleClick.bind(this, 'home')}>
            <Icon name='home' />
            Home
          </div>
          <div 
            className={`side-bar-button-item ${this.state.activeButton === 'orders' && 'active'}`}
            onClick={this.handleClick.bind(this, 'orders')}>
            <Icon name='shipping' /> 
            Orders
          </div>
          <div 
            className={`side-bar-button-item ${this.state.activeButton === 'products' && 'active'}`}
            onClick={this.handleClick.bind(this, 'products')}>
            <Icon name='shopping cart' /> 
            Products
          </div>
          <div 
            className={`side-bar-button-item ${this.state.activeButton === 'clients' && 'active'}`}
            onClick={this.handleClick.bind(this, 'clients')}>
            <Icon name='users' /> 
            Clients
          </div>
          <div 
            className={`side-bar-button-item ${this.state.activeButton === 'users' && 'active'}`}
            onClick={this.handleClick.bind(this, 'users')}>
            <Icon name='user circle outline' /> 
            Users
          </div>
        </div>
        <div className='left-bar-menu-profile-container'>
        </div>
        <div className='left-bar-menu-control-container'>
        </div>
      </LeftBarStyle>
    )
  }
}
