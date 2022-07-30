import React from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ largeImageURL, tags, webformatURL, toggleModal }) {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => toggleModal(webformatURL)}
    >
      <img className={s.imgCart} src={largeImageURL} alt={tags} />
    </li>
  );
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
