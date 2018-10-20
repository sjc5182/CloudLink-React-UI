import React from 'react';
import { TopBarStyle } from './style/'

export default class TopBar extends React.Component {
  render() {
    const { toggleLoginModal, toggleSignupModal } =  this.props
    return (
      <TopBarStyle>
        <div className="top-bar-search-container">
        </div>
        <div 
          className="user-sign-up"
          onClick={ toggleSignupModal }
          >
          Sign Up
        </div>
        <div 
          className="user-login"
          onClick={ toggleLoginModal }>
          Login
        </div>
      </TopBarStyle>
    )
  }
}
