import { NavLink } from "react-router-dom";
import s from './navigation.module.css';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink className={s.navHeaderLink} activeclassname={s.activeLink} to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink className={s.navHeaderLink} activeclassname={s.activeLink} to="/movies">Movies</NavLink>
      </li>
    </ul> 
  );
};

export default Navigation;