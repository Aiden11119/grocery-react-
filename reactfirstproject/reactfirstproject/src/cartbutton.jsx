const CartButton = ({ quantity, onChange }) => {

    function add() {
      onChange(quantity + 1);
    }
  
    function minus() {
      if (quantity > 0) onChange(quantity - 1);
    }
  
    return (
        <div className="d-flex align-items-center gap-2">
        <button className="btn btn-primary" style={{ width: "50px" }} onClick={add}>+</button>
        <span>{quantity}</span>
        <button className="btn btn-primary" style={{ width: "50px" }} onClick={minus}>-</button>
      </div>
    );
  };

  export default CartButton;
  