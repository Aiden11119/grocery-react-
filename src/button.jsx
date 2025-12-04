import { useState } from "react";

function Button({ quantity, setQuantity }) {  // ✅ props 解构

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change)); // 确保数量最小为 1
  };

  const cartitem=[]

  return (
    <>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => handleQuantityChange(-1)}
        disabled={quantity === 1}   // ✅ 使用 props.quantity
      >
        -
      </button>

      <input
        type="text"
        className="form-control text-center"
        value={quantity}   // ✅ 使用 props.quantity
        readOnly
      />

      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => handleQuantityChange(1)}
      >
        +
      </button>
    </>
  );
}

export default Button;
