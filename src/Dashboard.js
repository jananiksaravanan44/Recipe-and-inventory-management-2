import React,{useState} from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

import {
Line,
Bar
} from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
BarElement,
Title,
Tooltip,
Legend
);

function Dashboard(){

const [darkMode,setDarkMode]=useState(true);

const chartTextColor=

darkMode
?
"white"
:
"#1E293B";

const chartGridColor=

darkMode
?
"rgba(255,255,255,0.15)"
:
"rgba(0,0,0,0.12)";

const expenseData={

labels:[

"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"

],

datasets:[

{

label:

"Expense Saved ₹",

data:[

1500,
3000,
4500,
7000,
9000,
12000

],

borderColor:

"#ff9800",

backgroundColor:

"rgba(255,152,0,0.25)",

fill:true,

tension:0.4

}

]

};

const wastageData={

labels:[

"Rice",
"Vegetables",
"Milk",
"Bread",
"Oil",
"Spices"

],

datasets:[

{

label:

"Wastage Reduced %",

data:[

45,
60,
35,
70,
50,
65

],

backgroundColor:[

"#ff9800",
"#4caf50",
"#2196f3",
"#ff5722",
"#9c27b0",
"#00bcd4"

]

}

]

};

return(

<div

className={

darkMode

?

"dashboard-page dark"

:

"dashboard-page light"

}

>

<Sidebar/>

<div className="dashboard-overlay">

</div>

<div className="dashboard-container">

<div className="main-content">

<div className="topbar">

<h1>

Dashboard Overview

</h1>

<div className="top-actions">

<button

className="theme-btn"

onClick={()=>

setDarkMode(

!darkMode

)

}

>

{

darkMode

?

"☀"

:

"🌙"

}

</button>

<div className="profile">

Admin

</div>

</div>

</div>

<div className="card-grid">

<div className="dash-card">

<h2>

₹12K

</h2>

<p>

Expense Saved

</p>

</div>

<div className="dash-card">

<h2>

54%

</h2>

<p>

Food Waste Reduced

</p>

</div>

<div className="dash-card">

<h2>

180

</h2>

<p>

Recipes Stored

</p>

</div>

<div className="dash-card">

<h2>

68

</h2>

<p>

Inventory Items

</p>

</div>

</div>

<div className="graph-grid">

<div className="graph-card">

<h2>

Expense Savings Trend

</h2>

<Line

data={expenseData}

options={{

plugins:{

legend:{

labels:{

color:

chartTextColor,

font:{

size:16,

weight:"bold"

}

}

}

},

scales:{

x:{

ticks:{

color:

chartTextColor

},

grid:{

color:

chartGridColor

}

},

y:{

ticks:{

color:

chartTextColor

},

grid:{

color:

chartGridColor

}

}

}

}}

/>

</div>

<div className="graph-card">

<h2>

Ingredient Wastage Reduction

</h2>

<Bar

data={wastageData}

/>

</div>

</div>

<div className="inventory-section">

<h2>

Inventory Status

</h2>

<table>

<thead>

<tr>

<th>

Ingredient

</th>

<th>

Stock

</th>

<th>

Status

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

Rice

</td>

<td>

45 kg

</td>

<td>

✅ Good

</td>

</tr>

<tr>

<td>

Milk

</td>

<td>

5 L

</td>

<td>

⚠ Low

</td>

</tr>

<tr>

<td>

Vegetables

</td>

<td>

20 kg

</td>

<td>

✅ Good

</td>

</tr>

<tr>

<td>

Oil

</td>

<td>

3 L

</td>

<td>

⚠ Reorder

</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

</div>

);

}

export default Dashboard;