import React from 'react'
//import SubBarMenu from './components/side-bar-menu/'
//import TopBarMenu from './components/top-bar/'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import MainContent from './components/main-content/'
import LeftBarMenu from './components/left-bar-menu'
import { ApplicationStyle } from './style/'

const client = new ApolloClient({
  // uri: 'https://bl-test-server.herokuapp.com/graphql'
  uri: 'localhost:4000/graphql'
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApplicationStyle>
          {/* <TopBarMenu />
          <div className='app-main-content-container'>
            <SubBarMenu />
            <MainContent />
          </div> */}
          <LeftBarMenu />
          <MainContent />
        </ApplicationStyle>
      </ApolloProvider>
    );
  }
}

export default App;
