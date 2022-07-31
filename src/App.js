import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar';
import searchbarAPI from './components/services/searchbarApi';
import SearchbarError from './components/Searchbar/SearchbarError';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import s from './styles.css';

function App() {
  const [images, setImages] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [largeImageURL, setlargeImageURL] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!searchName) {
      return;
    }
    const feachCartImg = () => {
      searchbarAPI
        .fetchSearchbar(searchName, page)
        .then(data => {
          setImages(images => [...images, ...data.hits]);
          setStatus('resolved');
          setData(data.totalHits);
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    };
    feachCartImg();
    setStatus('pending');
  }, [searchName, page]);

  const openModal = imageUrl => {
    setShowModal(true);
    setlargeImageURL(imageUrl);
  };
  const closeModal = () => {
    setShowModal(false);
    setlargeImageURL('');
  };

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const handleFormSubmit = searchName => {
    setImages([]);
    setPage(1);
    setSearchName(searchName);
  };

  return (
    <div
      className={s.App}
      style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}
    >
      <Searchbar onSubmir={handleFormSubmit} />
      <ToastContainer autoClose={3000} />
      {status === 'idle' && (
        <div
          style={{
            textAlign: 'center',
            color: '#3f51b5',
            margin: '0 auto',
            padding: 20,
          }}
        >
          Введите имя для поиска
        </div>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <SearchbarError message={error.message} />}
      {status === 'resolved' && (
        <div>
          <ImageGallery images={images} toggleModal={openModal} />
          {images.length !== data && (
            <Button onClickBtn={handleLoadMore} />
          )}{' '}
        </div>
      )}
      {showModal && (
        <Modal onClose={closeModal}>
          <img src={largeImageURL} alt="images"></img>
        </Modal>
      )}
    </div>
  );
}

export default App;
