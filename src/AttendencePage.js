import React,{useState} from "react";
import "./AttendancePage.css";
import Sidebar from "./Sidebar";

function AttendancePage(){

const [staff,setStaff]=useState([

{
id:1,
name:"John",
status:"Present"
},

{
id:2,
name:"Priya",
status:"Absent"
},

{
id:3,
name:"Arun",
status:"Present"
}

]);

const [showPopup,setShowPopup]=useState(false);

const [form,setForm]=useState({

name:"",
status:"Present"

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:

e.target.value

});

};

const addStaff=()=>{

if(!form.name){

alert(

"Enter Employee Name"

);

return;

}

setStaff([

...staff,

{

id:Date.now(),

...form

}

]);

setForm({

name:"",
status:"Present"

});

setShowPopup(false);

};

const totalPresent=

staff.filter(

(item)=>

item.status==="Present"

).length;

const totalAbsent=

staff.filter(

(item)=>

item.status==="Absent"

).length;

return(

<div className="attendance-page">

<Sidebar/>

<div className="attendance-card">

<h1>

📅 Daily Attendance

</h1>

<div className="summary-grid">

<div className="summary-card">

👨‍🍳 Total Staff

<h2>

{staff.length}

</h2>

</div>

<div className="summary-card">

✅ Present

<h2>

{totalPresent}

</h2>

</div>

<div className="summary-card">

❌ Absent

<h2>

{totalAbsent}

</h2>

</div>

</div>

<div className="top-bar">

<button

onClick={()=>

setShowPopup(true)

}

>

+ Add Attendance

</button>

</div>

<table>

<thead>

<tr>

<th>

Employee

</th>

<th>

Status

</th>

</tr>

</thead>

<tbody>

{

staff.map(

(item)=>(

<tr
key={item.id}
>

<td>

{item.name}

</td>

<td

className={

item.status===

"Present"

?

"present"

:

"absent"

}

>

{

item.status===

"Present"

?

"✅ Present"

:

"❌ Absent"

}

</td>

</tr>

)

)

}

</tbody>

</table>

{

showPopup&&

<div className="popup-overlay">

<div className="popup-card">

<h2>

Add Attendance

</h2>

<div className="popup-grid">

<input

name="name"

placeholder=

"Employee Name"

value={form.name}

onChange={handleChange}

/>

<select

name="status"

value={form.status}

onChange={handleChange}

>

<option>

Present

</option>

<option>

Absent

</option>

</select>

</div>

<div className="popup-buttons">

<button

onClick={addStaff}

>

Save

</button>

<button

onClick={()=>

setShowPopup(false)

}

>

Cancel

</button>

</div>

</div>

</div>

}

</div>

</div>

);

}

export default AttendancePage;