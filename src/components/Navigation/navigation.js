import { React } from 'react';
import { NavLink } from "react-router-dom";
import s from './navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.header} >
      <li>
        <NavLink className={s.headerLink} activeClassName={s.activeHeaderLink} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={s.headerLink} activeClassName={s.activeHeaderLink} to="/movies">Movies</NavLink>
      </li>
    </ul> 
  );
};

export default Navigation;