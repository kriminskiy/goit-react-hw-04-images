import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          toggleModal={toggleModal}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
