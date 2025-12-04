import { useContext, useEffect, useState } from "react";
import { CartContext } from "./App";
import CartButton from "./cartbutton";

function Cart()
{
    const{cartItems, setCartItems,CurrentUser}=useContext(CartContext);
    
    
    function Remove(index) {
        // 使用 setCartItems 更新状态
        setCartItems(prev => prev.filter((_, i) => i !== index));
      }

      
    
      const totalCartPrice = cartItems.reduce((acc, item) => {
        return acc + parseFloat(item.totalPrice); // 累加每个商品的 totalPrice
      }, 0);

      useEffect(() => {
      if(CurrentUser)
      {
      localStorage.setItem(`cart_${CurrentUser.name}`, JSON.stringify(cartItems));
      }
      }, [cartItems]);
      

    return (
        <>
          <div className="h1 d-flex justify-content-center">My Cart</div>
      
          {cartItems.map((item, index) => (
            <div className="row border p-2 mb-2" key={index}>
              <div className="col-3">
                <img 
                  src={item.imageSrc} 
                  alt={item.name} 
                  className="img-fluid"
                />
              </div>
      
              <div className="col-3">
                <strong>{item.name}</strong>
                <br />
                {item.description}
              </div>
      
            <div className="col-2">
            <CartButton
              quantity={item.quantity}
              onChange={(newQty) => {
                const newCart = [...cartItems];
                newCart[index].quantity = newQty;
                newCart[index].totalPrice = (newQty * newCart[index].price).toFixed(2);
                setCartItems(newCart);
              }}
            />
              </div>
       


              <div className="col-2">
                Price: ${item.price}
              </div>
      
              <div className="col-1">
                Total: ${item.totalPrice}
              </div>
      
              <div className="col-1">
              <button className="btn btn-danger" onClick={() => Remove(index)}>
                    Remove
              </button>
              </div>
            </div>
          ))}

            <div className="total h4 text-end">
            Total: ${totalCartPrice.toFixed(2)}
            </div>
        </>
      );

}

export default Cart;