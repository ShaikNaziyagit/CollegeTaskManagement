import React from "react";
import { Line } from "react-chartjs-2";
import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
} from "chart.js";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


export default function ProductivityChart() {
const data = {
labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
datasets: [
    {
label: "Tasks Completed",
data: [2, 4, 3, 6, 5, 4, 7],
borderColor: "#1e40af",
},
],
};


return (
<div className="chart">
<h3>Weekly Productivity</h3>
<Line data={data} />
</div>
);
}