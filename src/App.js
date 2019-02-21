import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
  state = {
    results: []
  };

  setResults = results => {
    this.setState({ results });
  };

  render() {
    return (
      <div className='container'>
        <div className='header clearfix mt-5'>
          <h3 className='text-muted'>Itunes Song Search</h3>
        </div>
        <div className='jumbotron'>
          <Search results={this.state.results} setResults={this.setResults} />
        </div>
      </div>
    );
  }
}

export default App;
