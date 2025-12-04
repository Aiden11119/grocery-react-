
import { useContext, useEffect } from "react";        // React hook
import { CartContext } from "./App";       // 你的 CartContext

function AddToCartButton({ quantity, name, imageSrc, description, price, totalPrice, onMessage }) {
  
  const { cartItems, setCartItems, CurrentUser,setCurrentUser } = useContext(CartContext);
  
  
  const addToCart = () => {
    if(!CurrentUser)
    {
      alert("Please log in");
      return;
    }

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.name === name);

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          totalPrice: (updated[existingIndex].price * (updated[existingIndex].quantity + quantity)).toFixed(2)
        };

        // 调用父组件传来的回调显示提示
        onMessage?.(`${name} in cart has change to ${quantity}!`);
        return updated;
      }
      
      else {
        onMessage?.(`Added ${quantity} x ${name} to cart!`);
        return [...prev, { quantity, name, imageSrc, description, price, totalPrice }];
      }

      
    });

  };

  useEffect(() => {
    if (CurrentUser) {
      localStorage.setItem(`cart_${CurrentUser.name}`, JSON.stringify(cartItems));
    }
  }, [cartItems, CurrentUser]);
  

  

  return (
    <button className="btn btn-primary" onClick={addToCart}>
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
