import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function Profile() {
const { user } = useContext(AuthContext);


return (
<div className="profile">
<h2>User Profile</h2>


<p><b>Name:</b> {user?.name}</p>
<p><b>Email:</b> {user?.email}</p>
</div>
);
}