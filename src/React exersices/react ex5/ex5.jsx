import { useState } from "react";


const ShoppingCart = ()=>{

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('')
  const [prices, setPrices] = useState('');
  const addCart = ()=>{
   const newCArt={
      id:crypto.randomUUID(),
      name:productName,
      quantity:1,
      price:Number(prices)
    }
    console.log(newCArt)
    setProducts([...products, newCArt]);
    setProductName('');
    setPrices('')
  }
    const decreaseQuantity = (id) => {
    const updatedProducts = products.map((item) =>
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    );
    setProducts(updatedProducts);
  };

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setProducts(updatedProducts);
  };

  const totalPrice = products.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  const removeProduct=(id)=>{
    const removeCart = products.filter((item) => 
    item.id !== id )
    setProducts(removeCart)
  }

return (
    <div style={{ textTransform: 'capitalize', padding: '20px' }}>
      <h1>simple shopping cart</h1>
      <h2>add a product</h2>
      <input 
        type="text" 
        placeholder="Product Name" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={prices} 
        onChange={(e) => setPrices(e.target.value)} 
      />
      <button onClick={addCart}>Add to Cart</button>

      <div style={{ marginTop: '20px' }}>
        {products.length === 0 ? <p>the cart is empty.</p> : (
          <>
            <ol>
              {products.map((product) => (
                <li key={product.id} style={{ marginBottom: '10px' }}>
                  <h5>{product.name} - ${product.price}.00</h5>
                  <p>
                    Quantity: 
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span style={{ margin: '0 10px' }}>{product.quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                  </p>
                  <button onClick={()=> removeProduct(product.id)}>REMOVE</button>
                </li>
              ))}
            </ol>
            <hr />
            <h3>Total Price: ${totalPrice}.00</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;