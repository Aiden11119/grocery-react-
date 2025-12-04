import { useState } from "react";
import Button from "./button";
import AddToCartButton from "./addtocartbutton";
import "./addtocartbutton.css";

const Vegetable = ({ name, imageSrc, description, price }) => {
  // 状态管理（此处仅用于展示，实际项目中可能使用 hooks）

  const [quantity, setQuantity] = useState(1);
  const pricePerPcs = price;
  const totalPrice = (pricePerPcs * quantity).toFixed(2);
  const [msg, setMsg] = useState("");

  const showMessage = (text) => {
    setMsg(text);
    setTimeout(() => setMsg(""), 2000);
  };

  return (

    
    // 使用 Bootstrap Card 类
    <div className="card h-100 shadow-sm">
      {/* 🍎 Card Header */}
      <div className="card-header bg-success text-white text-center">
        <h5 className="mb-0">{name.toUpperCase()}</h5>
      </div>

      {/* 🖼️ Card Image */}
      <img
        src={imageSrc}
        className="card-img-top p-3"
        alt={name}
        style={{ maxHeight: "150px", objectFit: "contain" }}
      />

      {/* 📝 Card Body */}
      <div className="card-body d-flex flex-column">
        <p className="card-text text-muted flex-grow-1">{description}</p>
        <h6 className="text-center mt-2 mb-3">${pricePerPcs.toFixed(2)}/pcs</h6>
      </div>

      {/* 🛒 Card Footer */}
      <div className="card-footer bg-light border-top">
        <div className="d-flex justify-content-between align-items-center mb-2">
          {/* 数量控制 */}
          <div
            className="input-group input-group-sm"
            style={{ width: "120px" }}
          >
            <Button quantity={quantity} setQuantity={setQuantity} />
          </div>
          {/* 总价显示 */}
          <div className="fw-bold fs-5 text-success">${totalPrice}</div>
        </div>

        {/* 加入购物车按钮 */}
        <div className="d-grid position-relative">
          <AddToCartButton
            quantity={quantity}
            name={name}
            imageSrc={imageSrc}
            description={description}
            price={price}
            totalPrice={totalPrice}
            onMessage={showMessage} // 传入回调显示提示
          />

          {/* 提示信息 div */}
          {msg && (
        <div
            style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translate(-50%, 0)",
            backgroundColor: "green",
            color: "white",
            padding: "4px 10px",
            borderRadius: "5px",
            zIndex: 10,
            animation: "flyUp 5s forwards",
            }}
        >
            {msg}
        </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Vegetable;
