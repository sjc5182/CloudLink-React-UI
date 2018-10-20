import React from 'react'
import { MainContentStyle } from './style/'
import TopBar from './top-bar/'
import LoginModal from '../modals/login-modal/'
import SignupModal from '../modals/sign-up-modal/'
import SalesOrderComponent from '../sale-order-component/'
import ProductList from '../atoms/products-list'

export default class MainContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoginModalOpen: false,
      isSignupModalOpen: false
    }
    this.toggleLoginModal = this.toggleLoginModal.bind(this)
    this.toggleSignupModal = this.toggleSignupModal.bind(this)
  }
  toggleLoginModal() {
    this.setState({ isLoginModalOpen: !this.state.isLoginModalOpen })
  }
  toggleSignupModal() {
    this.setState({ isSignupModalOpen: !this.state.isSignupModalOpen })
  }
  render() {
    const { isLoginModalOpen, isSignupModalOpen } = this.state
    return(
      <MainContentStyle>
        {/* <TopBar 
          toggleLoginModal={ this.toggleLoginModal }
          toggleSignupModal={ this.toggleSignupModal }/> */}
        {/* <LoginModal 
          isModalOpen={ isLoginModalOpen }
          toggleLoginModal={ this.toggleLoginModal }
        />
        <SignupModal
          isModalOpen={ isSignupModalOpen }
          toggleSignupModal={ this.toggleSignupModal }/> */}
          <SalesOrderComponent />
      </MainContentStyle>
    )
  }
}
