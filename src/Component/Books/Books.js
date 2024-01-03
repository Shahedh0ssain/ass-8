import React from 'react';
import './Books.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
   
    const {addToCart,book} = props;
    const  {picture,price,name} = book;
   
    return (

        <div className='product'>
         <img src={picture} alt="" srcSet='' />
            <p className='product-name'>{name}</p>
            <div className="product-info">
               <p>${price}</p>
             </div>
             <button onClick={() => addToCart(book)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            
             </button>
        
        </div>
    );
};

export default Product;