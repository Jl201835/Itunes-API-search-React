import React, { Component } from 'react';
import Search from './components/Search';
import SongInfo from './components/SongInfo';

class App extends Component {
  state = {
    results: [],
    resultsReady: false,
    expandedSong: null
  };

  setResults = (results, resultsReady) => {
    this.setState({ results, resultsReady });
  };

  collapseSong = () => {
    this.setState({ expandedSong: null });
  };

  expandSong = expandedSong => {
    this.setState({ expandedSong });
  };

  render() {
    return (
      <div className='container'>
        <div className='header clearfix mt-5'>
          <h3 className='text-muted'>Itunes Song Search</h3>
        </div>
        <div className='jumbotron'>
          {this.state.expandedSong ? (
            <SongInfo
              songData={this.state.expandedSong}
              collapseSong={this.collapseSong}
            />
          ) : (
            <Search
              results={this.state.results}
              setResults={this.setResults}
              resultsReady={this.state.resultsReady}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
