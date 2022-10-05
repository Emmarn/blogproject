import React from 'react';
import styles from './Jarisblog.css';


export const Jarisblog = () => {
        //Content på sidan kommer att visas från toppen.
React.useEffect(()=>{
  window.scrollTo(0,0);
}, []);
  return (
      <>
        <div className='jarisblog'>Olga</div>
      </>
);
};