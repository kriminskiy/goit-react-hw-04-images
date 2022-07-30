import React from 'react';

import s from './Button.module.css';

export default function Button({ onClickBtn }) {
  return (
    <button className={s.ButtonEl} type="button" onClick={onClickBtn}>
      Load more
    </button>
  );
}
