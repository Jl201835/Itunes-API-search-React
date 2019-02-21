import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
  state = {
    results: [],
    resultsReady: false
  };

  setResults = (results, resultsReady) => {
    this.setState({ results, resultsReady });
  };

  render() {
    return (
      <div className='container'>
        <div className='header clearfix mt-5'>
          <h3 className='text-muted'>Itunes Song Search</h3>
        </div>
        <div className='jumbotron'>
          <Search
            results={this.state.results}
            setResults={this.setResults}
            resultsReady={this.state.resultsReady}
          />
        </div>
      </div>
    );
  }
}

export default App;
