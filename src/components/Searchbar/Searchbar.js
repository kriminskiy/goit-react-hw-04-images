import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { ToastContainer } from 'react-toastify';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmir }) {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchName.trim() === '') {
      ToastContainer.error('Введите имя.');
      return;
    }
    onSubmir(searchName);
    setSearchName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.Searchbutton}>
          <ImSearch />
          <span className={s.button__label}>Search</span>
        </button>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={searchName}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
