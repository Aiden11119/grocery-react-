import { useContext, useState } from "react";
import FruitList from "./Fruit.list";
import VList from "./vegetablelist";
import { CartContext } from "./App";  

function Buy() {
  const [choice, setchoice] = useState("vegetable");
  const [search, setSearch] = useState("");
 // 默认先显示一次，你可以改 false
  const {CurrentUser} = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
   
      {/* Alert 提醒区 */}
      {!CurrentUser && showAlert && (
        <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
            style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            zIndex: 9999,
            width: "400px"
            }}
        >
            <strong>You need to login first!</strong><br />
            Please login before buying an item.
            <button
            type="button"
            className="btn-close"
            onClick={() => setShowAlert(false)}
            ></button>
        </div>
        )}



      {/* Search */}
      <div className="search d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-50 mx-auto mt-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Choice Buttons */}
      <div className="vegetablefruitchoice d-flex justify-content-center mt-3 gap-3">
        <button
          className={`btn ${choice === "vegetable" ? "btn-primary" : "border border-primary"}`}
          onClick={() => setchoice("vegetable")}
        >
          Vegetable
        </button>

        <button
          className={`btn ${choice === "fruit" ? "btn-primary" : "border border-primary"}`}
          onClick={() => setchoice("fruit")}
        >
          Fruit
        </button>
      </div>

      {/* List */}
      {choice === "vegetable" ? (
        <VList search={search} />
      ) : (
        <FruitList search={search} />
      )}
    </>
  );
}

export default Buy;
