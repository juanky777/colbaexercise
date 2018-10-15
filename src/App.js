import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import MainContent from './containers/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <MainContent />
        </Layout>
      </div>
    );
  }
}

export default App;
