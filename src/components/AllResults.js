import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const AllResults = ({ songs }) => {
  return (
    <div>
      {songs.length ? (
        <div>
          <hr />
          <div className='row'>
            {songs.map((song, idx) => (
              <SearchResult songData={song} key={idx} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

AllResults.propTypes = {
  songs: PropTypes.array
};

export default AllResults;
