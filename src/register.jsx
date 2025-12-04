import { useState } from "react";

export default function Register({ setPage }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("User")) || [];
  });




  const handleRegister = (e) => {
    e.preventDefault();
    
    // 简单验证示例
    if (!name || !age || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (user.find(u => u.name === name)) {
      alert("User already exists!");
      return
    }

    const newUser = { name, age, email, password };
    const updatedUsers = [...user, newUser];
    setUser(updatedUsers);
    localStorage.setItem("User", JSON.stringify(updatedUsers));


    // 这里可以调用后端 API 或保存到 localStorage
    alert(`Registered successfully!\nName: ${name}\nAge: ${age}\nEmail: ${email}`);


    
    // 注册成功后可以清空表单
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setPage("login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleRegister}>
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

        {/* Age */}
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input 
            type="number" 
            className="form-control" 
            value={age} 
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email (Gmail)</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Gmail"
          />
        </div>

        {/* Password */}
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

        {/* Register button */}
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>

      {/* Already have account */}
      <div className="d-flex justify-content-center align-items-center mt-3">
        <span>Already have an account?&nbsp;</span>
        <button
            className="btn btn-link p-0"
            onClick={() => setPage("login")}
        >
            Login
        </button>
      </div>
    </div>
  );
}
