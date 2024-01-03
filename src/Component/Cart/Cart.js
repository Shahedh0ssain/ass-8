import React from 'react';
import './Cart.css';
import Cproduct from '../Cproduct/Cproduct'

const Cart = ({cart,removeCart,clarItem,chooseForMe}) => {
   
      

    return (
        <div className='cart'>
            <h3>Selected Items</h3>
            {
                 cart.map(book=><Cproduct
                 key={book._id}
                 book  = {book}
                 clarItem = {clarItem}
                 ></Cproduct>)

            }         
            <button onClick={()=>chooseForMe()}>CHOOSE 1 FOR ME</button><br />
            <button onClick={()=>removeCart()}>CHOOSE AGAIN</button>
   
        </div>
    );
};

export default Cart;