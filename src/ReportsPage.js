import React,{useState} from "react";
import "./ReportsPage.css";
import Sidebar from "./Sidebar";

function ReportsPage(){

const [reports]=useState([

{

name:"Inventory Report",

status:"Generated",

date:"25-05-2026"

},

{

name:"Cost Analysis",

status:"Generated",

date:"25-05-2026"

},

{

name:"Attendance Report",

status:"Generated",

date:"25-05-2026"

},

{

name:"Recipe Performance",

status:"Pending",

date:"--"

}

]);

return(

<div className="report-page">

<Sidebar/>

<div className="report-card">

<h1>

📊 Reports Dashboard

</h1>

<div className="report-grid">

<div className="metric-card">

<h2>

₹12K

</h2>

<p>

Expense Saved

</p>

</div>

<div className="metric-card">

<h2>

54%

</h2>

<p>

Waste Reduced

</p>

</div>

<div className="metric-card">

<h2>

180

</h2>

<p>

Recipes Added

</p>

</div>

<div className="metric-card">

<h2>

68

</h2>

<p>

Inventory Items

</p>

</div>

</div>

<div className="report-table">

<h2>

Generated Reports

</h2>

<table>

<thead>

<tr>

<th>

Report Name

</th>

<th>

Status

</th>

<th>

Generated Date

</th>

<th>

Action

</th>

</tr>

</thead>

<tbody>

{

reports.map(

(report,index)=>(

<tr key={index}>

<td>

{report.name}

</td>

<td>

{

report.status===

"Generated"

?

"✅ Generated"

:

"⌛ Pending"

}

</td>

<td>

{report.date}

</td>

<td>

<button
className="generate-btn"
>

Generate

</button>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

<div
className="report-actions"
>

<button
className="generate-btn"
>

Generate Monthly Report

</button>

<button
className="generate-btn"
>

Download PDF

</button>

<button
className="generate-btn"
>

Export Excel

</button>

</div>

</div>

</div>

);

}

export default ReportsPage;