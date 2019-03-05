import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const AllResults = ({ songs, resultsReady, expandSong }) => {
  return (
    <div>
      {resultsReady &&
        (songs.length ? (
          <div>
            <hr />
            <div className='row'>
              {songs.map((song, idx) => (
                <SearchResult
                  songData={song}
                  expandSong={expandSong}
                  key={idx}
                />
              ))}
            </div>
          </div>
        ) : (
          'No results found'
        ))}
    </div>
  );
};

AllResults.propTypes = {
  songs: PropTypes.array
};

export default AllResults;
