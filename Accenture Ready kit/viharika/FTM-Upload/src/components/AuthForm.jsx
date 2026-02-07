import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function AuthForm() {
const { login } = useContext(AuthContext);


const [email, setEmail] = useState("");
const [name, setName] = useState("");


const submit = (e) => {
e.preventDefault();
login(email, name);
};


return (
<form className="auth-form" onSubmit={submit}>
<h3>Login</h3>
<input
placeholder="Name"
value={name}
required
onChange={(e) => setName(e.target.value)}
/>


<input
type="email"
placeholder="Email"
value={email}
required
onChange={(e) => setEmail(e.target.value)}
/>
<button>Login</button>
</form>
);
}