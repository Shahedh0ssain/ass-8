import React from 'react';
import './Cproduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons';

const Cproduct = (props) => {

  const{book,clarItem} = props
  const {name,picture,_id} = book;
    return (
        <div className='cart-product'>
           <div className='image'>
             <img src={picture} alt="" />
           </div>
            <p>{name}</p>
            <button onClick={()=>clarItem(_id)}>
            <FontAwesomeIcon icon={ faTrash} className='dButton' />
            </button>
        </div>
    );
};

export default Cproduct;