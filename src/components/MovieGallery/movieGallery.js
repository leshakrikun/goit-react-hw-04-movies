import React from 'react';
import s from './movieGallery.module.css';

export default function MovieGallery ({children})  {
return(
<ul className={s.movieGallery} >
 {children}
</ul>
)}