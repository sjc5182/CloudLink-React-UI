import React from 'react'
import { HeaderStyle } from './style/'
import SearchBar from './search-category/'

export default class Header extends React.Component{
  render() {
    const { headerText } = this.props
    return(
      <HeaderStyle>
        <div className='header-text-info'>{headerText}</div>
        <SearchBar />
      </HeaderStyle>
    )
  }
}
