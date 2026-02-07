import React, { useState, useEffect } from "react";


export default function Stats() {
const [stats, setStats] = useState({ todo: 0, done: 0 });


useEffect(() => {
const data = JSON.parse(localStorage.getItem("tasks")) || {};


setStats({
todo: data.todo?.length || 0,
done: data.done?.length || 0,
});
}, []);
return (
<div className="stats">
<h3>Task Statistics</h3>
<p>Pending: {stats.todo}</p>
<p>Completed: {stats.done}</p>
</div>
);
}