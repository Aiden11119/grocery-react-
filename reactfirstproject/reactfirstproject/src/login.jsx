import { useContext, useState } from "react";
import { CartContext } from "./App";

export default function Login({ setPage }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {CurrentUser,setCurrentUser}=useContext(CartContext)

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert("Please fill in both name and email.");
      return;
    }


    const users = JSON.parse(localStorage.getItem("User")) || [];

    const existingUser = users.find(u => u.name === name);
    
    if (!existingUser) {
      alert("Invalid user. If you are a new user, please register.");
      setName("");
      setPassword("");
      return;
    }
    
    // --- 第二步：检查密码 ---
    if (existingUser.password !== password) {
      alert("Incorrect password.");
      setName("");
      setPassword("");
      return;
    }

    setCurrentUser(existingUser);
    localStorage.setItem("CurrentUser",JSON.stringify(existingUser));

    alert("log in successful");
    

    // 清空表单
    setName("");
    setPassword("");
    setPage("home")
    window.history.pushState({ page: 'home' }, '', '/home');

  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* password*/}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           placeholder="Enter your password"
          />
        </div>

        {/* Login button */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>

      {/* No account? Register */}
      <div className="d-flex justify-content-center align-items-center mt-3">
        <span>Don't have an account?&nbsp;</span>
        <button
            className="btn btn-link p-0"
            onClick={() => setPage("register")}
        >
            Register
        </button>
      </div>
    </div>
  );
}
