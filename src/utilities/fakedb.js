

// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        console.log(quantity);
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// remove from db
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// delete db
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

// get shoping cart
const getStoreCard = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export {
    addToDb, 
    getStoreCard,
    removeFromDb,
    deleteShoppingCart
}