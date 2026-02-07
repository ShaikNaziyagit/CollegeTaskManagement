import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


export default function CalendarView() {
const [date, setDate] = useState(new Date());


return (
<div className="calendar">
<h3>Important Dates</h3>
<Calendar onChange={setDate} value={date} />
<p>Selected: {date.toDateString()}</p>
</div>
);
}