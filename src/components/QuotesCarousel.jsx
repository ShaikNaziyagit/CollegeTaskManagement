import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const quotes = [
"Success is built on small efforts every day.",
"Stay focused and never give up.",
"Dream big. Work hard.",
"Your future depends on what you do today.",
];


export default function QuotesCarousel() {
const { user } = useContext(AuthContext);
const [index, setIndex] = useState(0);


useEffect(() => {
const timer = setInterval(() => {
    setIndex((prev) => (prev + 1) % quotes.length);
}, 3000);


return () => clearInterval(timer);
}, []);


return (
<div className="quotes">
<h3>Hello, {user?.name} 👋</h3>
<p>"{quotes[index]}"</p>
</div>
);
}