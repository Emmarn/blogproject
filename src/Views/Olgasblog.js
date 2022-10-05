import React from 'react';
import styles from './Olgasblog.css';


export const Olgasblog = () => {
        //Content på sidan kommer att visas från toppen.
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
        return (
                <>
                 <div className='olgasblog'>Olga</div>
                </>
        );
};