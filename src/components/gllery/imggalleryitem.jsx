import css from './gallery.module.css';
import { Component } from 'react';
import { Modal } from 'components/modal/modal';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { gallerys } = this.props;
    const { showModal } = this.state;
    return (
      <li key={gallerys.id} className={css.galleryList}>
        <img
          className={css.galleryListimg}
          src={gallerys.webformatURL}
          alt={gallerys.tags}
          onClick={this.toggleModal}
        />
        {showModal && <Modal forModal={gallerys} onToggle={this.toggleModal} />}
      </li>
    );
  }
}
