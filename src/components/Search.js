import React, { Component } from 'react';
import Axios from 'axios';
import AllResults from './AllResults';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    searchText: '',
    startDate: '',
    endDate: '',
    error: '',
    fetchingData: false
  };

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onButtonClick = async () => {
    this.setState({
      fetchingData: true
    });

    const {
      formatedSearchText,
      formatedStartDate,
      formatedEndDate
    } = this.formatSearchFields(this.state);

    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://itunes.apple.com/search?term=${formatedSearchText}`;

    try {
      const { data } = await Axios.get(requestUri);

      console.log(data.results.length);
      const searchResults = data.results.filter(song => {
        const releaseDate = new Date(song.releaseDate);
        return (
          releaseDate >= formatedStartDate && releaseDate <= formatedEndDate
        );
      });
      console.log(searchResults.length);

      this.setState({ fetchingData: false }, () => {
        this.props.setResults(searchResults);
      });
    } catch (error) {
      this.setState({
        error: error.toString(),
        fetchingData: false
      });
    }

    this.setState({
      searchText: '',
      startDate: '',
      endDate: ''
    });
  };

  formatSearchFields({ searchText, startDate, endDate }) {
    const formatedSearchText = searchText.replace(/\s+/g, '+');
    let formatedStartDate, formatedEndDate;
    if (startDate) {
      const startMonth = Number(startDate.slice(0, 2)) - 1;
      const startDay = Number(startDate.slice(3, 5));
      const startYear = Number(startDate.slice(6, 10));
      formatedStartDate = new Date(startYear, startMonth, startDay);
    } else {
      formatedStartDate = new Date(1900, 0, 1);
    }

    if (endDate) {
      const endMonth = Number(endDate.slice(0, 2)) - 1;
      const endDay = Number(endDate.slice(3, 5));
      const endYear = Number(endDate.slice(6, 10));
      formatedEndDate = new Date(endYear, endMonth, endDay);
    } else {
      formatedEndDate = Date.now();
    }
    return { formatedSearchText, formatedStartDate, formatedEndDate };
  }

  render() {
    return (
      <div>
        <div className='form-group column'>
          <div className='form-group row'>
            <label className='mr-1 col-sm-2'>Artist Name:</label>
            <input
              className='mr-1 col-sm-4 form-control'
              type='text'
              placeholder='Search songs by artist name'
              name='searchText'
              onChange={this.onTextChange}
              value={this.state.searchText}
            />
          </div>
          <div className='form-group row'>
            <label className='mr-1 col-sm-2'>Release Date:</label>
            <label className='mr-1 col-sm-1'>from</label>
            <input
              className='mr-1 col-sm-2 form-control'
              type='text'
              placeholder='MM-DD-YYYY'
              name='startDate'
              onChange={this.onTextChange}
              value={this.state.startDate}
            />
            <label className='mr-1 col-sm-1'>to</label>
            <input
              className='mr-1 col-sm-2 form-control'
              type='text'
              placeholder='MM-DD-YYYY'
              name='endDate'
              onChange={this.onTextChange}
              value={this.state.endDate}
            />
          </div>
          <button
            className='col-sm-2 btn btn-primary'
            disabled={!this.state.searchText}
            onClick={this.onButtonClick}
          >
            Search
          </button>
        </div>

        {this.state.fetchingData ? (
          <p className='lead text-center'>{'loading... '}</p>
        ) : (
          (this.state.error && (
            <p className='text-danger'>{this.state.error}</p>
          )) || <AllResults songs={this.props.results} />
        )}
      </div>
    );
  }
}

Search.propTypes = {
  results: PropTypes.array,
  setResults: PropTypes.func
};

export default Search;
