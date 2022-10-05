import React from 'react';
import styles from './Antonsblog.css';


export const Antonsblog = () => {
        //Content på sidan kommer att visas från toppen.
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
      
        return (
                <>
                 <div className='antonsblog'>Anton</div>
                </>
        );
};