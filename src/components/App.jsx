import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './gllery/gallery';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { Button } from 'components/btn';

axios.defaults.baseURL = 'https://pixabay.com/api';
export class App extends Component {
  state = {
    gallerys: [],
    isLoading: false,
    name: '',
    page: 1,
  };
  handleSubmitForm = name => {
    this.setState({ name });
  };
  onClickBtn = () => {
    this.setState({ page: this.state.page + 1 });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `?q=${this.state.name}&page=${this.state.page}&key=29731703-4e8659812dd82e74a79e4fb84&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({
        gallerys: [...this.state.gallerys, ...response.data.hits],
        isLoading: false,
      });
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Searchbar search={this.handleSubmitForm} />
        {isLoading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : (
          <>
            <ImageGallery gallerys={this.state.gallerys} />
            <Button onClickBtn={this.onClickBtn} />
          </>
        )}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
