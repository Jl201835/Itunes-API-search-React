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

  onSearchButtonClick = async () => {
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
      `https://itunes.apple.com/search?term=${formatedSearchText}&limit=200`;

    try {
      const { data } = await Axios.get(requestUri);

      const searchResults = data.results.filter(song => {
        const releaseDate = new Date(song.releaseDate);
        return (
          releaseDate >= formatedStartDate && releaseDate <= formatedEndDate
        );
      });

      this.setState({ fetchingData: false }, () => {
        this.props.setResults(searchResults, true);
      });
    } catch (error) {
      this.setState({
        error: error.toString(),
        fetchingData: false
      });
    }
  };

  onClearButtonClick = () => {
    this.setState({
      searchText: '',
      startDate: '',
      endDate: ''
    });
    this.props.setResults([], false);
  };

  formatSearchFields = ({ searchText, startDate, endDate }) => {
    const formatedSearchText = searchText.replace(/\s+/g, '+');
    let formatedStartDate, formatedEndDate;
    const dateRgx = /\d{2}-\d{2}-\d{4}/;
    if (startDate && dateRgx.test(startDate)) {
      const startMonth = Number(startDate.slice(0, 2)) - 1;
      const startDay = Number(startDate.slice(3, 5));
      const startYear = Number(startDate.slice(6, 10));
      formatedStartDate = new Date(startYear, startMonth, startDay);
    } else {
      formatedStartDate = new Date(1900, 0, 1);
    }

    if (endDate && dateRgx.test(endDate)) {
      const endMonth = Number(endDate.slice(0, 2)) - 1;
      const endDay = Number(endDate.slice(3, 5));
      const endYear = Number(endDate.slice(6, 10));
      formatedEndDate = new Date(endYear, endMonth, endDay);
    } else {
      formatedEndDate = Date.now();
    }
    return { formatedSearchText, formatedStartDate, formatedEndDate };
  };

  render() {
    console.log(this.props.resultsReady);
    return (
      <div>
        <div className='form-group column'>
          <div className='form-group row'>
            <div className='form-group column col-sm-6'>
              <label htmlFor='searchText'>
                Artist Name:
                {!this.state.searchText ? (
                  <span className='text-danger'> required</span>
                ) : /[^A-Za-z0-9\s]/.test(this.state.searchText) ? (
                  <span className='text-danger'>
                    {' '}
                    only alpha numeric characters and spaces allowed
                  </span>
                ) : (
                  ''
                )}
              </label>
              <input
                className='mr-1 col-sm-8 form-control'
                required
                pattern='[A-Za-z0-9\s]+'
                type='text'
                placeholder='Search songs by artist name'
                name='searchText'
                onChange={this.onTextChange}
                value={this.state.searchText}
              />
            </div>
            <div className='form-group column col-sm-6'>
              <label htmlFor='startDate'>
                Release Date:
                {(this.state.startDate &&
                  !/\d{2}-\d{2}-\d{4}/.test(this.state.startDate)) ||
                (this.state.endDate &&
                  !/\d{2}-\d{2}-\d{4}/.test(this.state.endDate)) ? (
                  <span className='text-danger'> MM-DD-YYYY</span>
                ) : (
                  ''
                )}
              </label>
              <div className='form-group row'>
                <label className='mr-4 col-sm-1'>from</label>
                <input
                  className='mr-1 col-sm-3 form-control'
                  type='text'
                  placeholder='MM-DD-YYYY'
                  name='startDate'
                  onChange={this.onTextChange}
                  value={this.state.startDate}
                />
                <label className='mr-2 col-sm-1'>to</label>
                <input
                  className='mr-1 col-sm-3 form-control'
                  type='text'
                  placeholder='MM-DD-YYYY'
                  name='endDate'
                  onChange={this.onTextChange}
                  value={this.state.endDate}
                />
              </div>
            </div>
          </div>

          <div className='form-group row'>
            <button
              className='col-sm-1 mx-2 btn btn-primary'
              disabled={!this.state.searchText}
              onClick={this.onSearchButtonClick}
            >
              Search
            </button>
            <button
              className='col-sm-1 mx-2 btn btn-primary'
              disabled={
                !this.state.searchText &&
                !this.state.startDate &&
                !this.state.endDate &&
                !this.props.resultsReady
              }
              onClick={this.onClearButtonClick}
            >
              Clear
            </button>
          </div>
        </div>

        {this.state.fetchingData ? (
          <p className='lead text-center'>{'loading... '}</p>
        ) : (
          (this.state.error && (
            <p className='text-danger'>{this.state.error}</p>
          )) || (
            <AllResults
              songs={this.props.results}
              resultsReady={this.props.resultsReady}
            />
          )
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
