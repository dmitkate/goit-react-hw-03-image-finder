import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Fetch } from './searchbar/fetch';

import { Searchbar } from './searchbar/Searchbar';
export class App extends Component {
  state = {
    image: [],
    loading: false,
    name: '',
  };

  handleSubmitForm = name => {
    this.setState({ name });
  };
  render() {
    return (
      <>
        <Searchbar search={this.handleSubmitForm} />
        <Fetch />
        <ToastContainer autoClose={3000} />
        {this.state.image && <p></p>}
      </>
    );
  }
}
