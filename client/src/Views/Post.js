import React from 'react';
import styles from './Post.css';
import { useState } from 'react';
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { viewState } from "../state";

export const Post = () => {
    return (
        <>          
         <div className='post'>Posts</div>
        </>
  );
};  
