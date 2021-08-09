import React from 'react';
import s from './searchbar.module.css';

export default function Searchbar ({handleSubmit,  handleChange})  {
  return(
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.searchFormInput}
          type="text"
          onChange={handleChange} 
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}