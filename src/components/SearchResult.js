import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({ songData }) => {
  return (
    <div className='col-lg-2 col-sm-4 col-md-3'>
      <div className='card'>
        <img
          className='card-img-top pl-4 pr-4 pt-2'
          src={songData.artworkUrl100}
          alt='Song cover'
          height='100px'
        />
        <div className='card-body'>
          <p
            className='text-sm-left card-title font-weight-bold'
            data-placement='bottom'
            title={songData.collectionName}
          >
            {songData.collectionName}
          </p>
          <p className='text-sm-left card-text'>{songData.artistName}</p>
        </div>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  songData: PropTypes.object
};

export default SearchResult;
