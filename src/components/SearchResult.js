import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({ songData }) => {
  const releaseYear = songData.releaseDate.slice(0, 4);
  const releaseMonth = songData.releaseDate.slice(5, 7);
  const releaseDay = songData.releaseDate.slice(8, 10);
  const formatedReleaseDate = `${releaseMonth}-${releaseDay}-${releaseYear}`;
  const previewUrl = songData.previewUrl;

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
          <p className='text-sm-left card-text'>{formatedReleaseDate}</p>
          <a href={previewUrl} target='blank'>
            <button className='btn btn-secondary'>Listen</button>
          </a>
        </div>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  songData: PropTypes.object
};

export default SearchResult;
