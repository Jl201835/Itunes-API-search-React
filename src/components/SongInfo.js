import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

class SongInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'Fetching description for this song...',
      error: ''
    };
  }

  componentDidMount() {
    this.getDescription();
  }
}
