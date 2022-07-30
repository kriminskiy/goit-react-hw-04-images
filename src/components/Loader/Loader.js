import React from 'react';
import { Hearts } from 'react-loader-spinner';
import s from './loader.module.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <Hearts color="#00BFFF" height={150} width={150} />
    </div>
  );
}
