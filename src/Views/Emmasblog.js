import React from 'react';
import styles from './Emmasblog.css';


export const Emmasblog = () => {
        //Content på sidan kommer att visas från toppen.
React.useEffect(()=>{
 window.scrollTo(0,0);
}, []);
      
 return (
     <>
        <div className='emmasblog'>Emma</div>
     </>
 );
};