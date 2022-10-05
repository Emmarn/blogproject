import React from 'react';
import styles from './Antonsblog.css';


export const Antonsblog = () => {
        //Content på sidan kommer att visas från toppen.
<<<<<<< HEAD
React.useEffect(()=>{
 window.scrollTo(0,0);
}, []);
      
 return (
     <>
       <div className='antonsblog'>Anton</div>
     </>
 );
=======
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
        return (
                <>
                 <div className='antonsblog'>Anton</div>
                </>
        );
>>>>>>> 28eb795e80525b1f645a685f0dfa4e22183c584c
};