import React, { useEffect, useState } from 'react';
import './Shop.css';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';




const Shop = () => {

  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('book.json')
      .then(res => res.json())
      .then(data => { setBooks(data) })
  }, []);

  // get product
  const addToCart = (sProduct) => {

    if (cart.indexOf(sProduct) === -1) {

      if (cart.length < 4) {
        const newCart = [...cart, sProduct];
        setCart(newCart);
        addToDb(sProduct._id);
      } else {
        alert('Number of item over then 4!')
      }
    }
  }
  //remove cart
  const removeCart = () => {
    setCart([]);
    deleteShoppingCart();
    console.log(cart.length);
  }

  //Choose for me 1 items from cart
  const chooseForMe = () => {

    if (cart.length >= 2) {

      const bookNumber = Math.floor(Math.random() * cart.length);
      const item = cart[bookNumber];

      const forMe = cart.find(cart => cart._id === item._id);
      setCart([forMe]);
    }
  }

  //ramove cart items
  const clarItem = (id) => {

    const newBook = cart.finplter((cart) => cart._id !== id);
    console.log(newBook);
    setCart(newBook);
    removeFromDb(id);
  }

  return (

    <div className='shop-container'>
      <div className='products-container'>

        {
          books.map(book => <Books
            key={book._id}
            book={book}
            addToCart={addToCart}
          ></Books>)
        }

      </div>
      <div className='cart-container'>
        <Cart
          cart={cart}
          removeCart={removeCart}
          clarItem={clarItem}
          chooseForMe={chooseForMe}
        ></Cart>
      </div>


    </div>
  );
};

export default Shop;