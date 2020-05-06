/** @format */

import React from 'react';
import './App.css';
import {Header} from './Header';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import RepoSearch from './RepoSearch';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer e5438816aecd948ac66d85883f9b382738c45286`,
  },
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <RepoSearch client={client} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
