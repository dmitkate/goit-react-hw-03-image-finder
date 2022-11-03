import React, { Component } from 'react';
import { FetchAPI } from 'fetch';
import { Searchbar } from './components/searchbar/Searchbar';
import { ImageGallery } from './components/gllery/gallery';
import { Loader } from 'components/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from 'components/btn';

export class App extends Component {
  state = {
    gallerys: [],
    isLoading: false,
    name: '',
    page: 1,
    totalHits: 0,
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.name !== this.state.name ||
  //     prevState.page !== this.state.page
  //   ) {
  //     this.setState({ isLoading: true });

  //     const { hits } = await FetchAPI(this.state.name, this.state.page);
  //     this.setState({
  //       gallerys: [...hits],
  //       isLoading: false,
  //     });
  //   }
  // }
  handleSubmitForm = async name => {
    this.setState({ isLoading: true, page: 1 });

    const { hits, totalHits } = await FetchAPI(name, this.state.page);
    if (hits.length === 0) {
      toast.error(`try again,${name} is not exis`);
    }

    this.setState({
      gallerys: [...hits],
      name: name,
      totalHits: totalHits,
      isLoading: false,
    });
  };
  onClickBtn = async () => {
    const { hits } = await FetchAPI(this.state.name, (this.state.page += 1));

    this.setState(prevState => ({
      gallerys: [...prevState.gallerys, ...hits],
      isLoading: false,
    }));
  };
  render() {
    const { isLoading, gallerys, totalHits } = this.state;
    let variables = '';
    if (isLoading === true) {
      variables = (
        <>
          <ImageGallery gallerys={this.state.gallerys} />
          <Loader />
          <Button onClickBtn={this.onClickBtn} />
        </>
      );
    } else if (
      isLoading === false &&
      gallerys.length !== this.state.totalHits
    ) {
      variables = (
        <>
          <ImageGallery gallerys={this.state.gallerys} />

          <Button onClickBtn={this.onClickBtn} />
        </>
      );
    } else if (gallerys.length === totalHits) {
      variables = <ImageGallery gallerys={this.state.gallerys} />;
    }
    return (
      <div>
        <Searchbar search={this.handleSubmitForm} />
        {variables}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
