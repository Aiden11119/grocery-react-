
import React from "react";

export default function Profile() {
// 从 localStorage 获取 CurrentUser
const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));

return (
<div className="container mt-5" style={{ maxWidth: "500px" }}> <h2>Profile</h2> <ul className="list-group"> <li className="list-group-item"><strong>Name:</strong> {CurrentUser.name}</li> <li className="list-group-item"><strong>Age:</strong> {CurrentUser.age}</li> <li className="list-group-item"><strong>Email:</strong> {CurrentUser.email}</li> </ul> </div>
);
}
