import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const AllResults = ({ songs, resultsReady }) => {
  console.log(resultsReady);
  return (
    <div>
      {resultsReady &&
        (songs.length ? (
          <div>
            <hr />
            <div className='row'>
              {songs.map((song, idx) => (
                <SearchResult songData={song} key={idx} />
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
