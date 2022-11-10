import { Send } from '@mui/icons-material';
import React from 'react'
import Pixabay from '../images/pixabay.jpg'
import Data from './Data';

const Pin = ({pinSize,name,link,imgSrc}) => {
  return (
    <div className={`pin ${pinSize}`}>
      
      <img className="Picture" src={imgSrc}/>
      <div className="content">
        <h3>{name}</h3>
        <a href={link}>
        <div className='icon'> <Send/></div>
        </a>
        
      </div>
    </div>
  );
}

export default Pin;