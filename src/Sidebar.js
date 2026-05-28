import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(){

const [open,setOpen]=useState(false);

const navigate=useNavigate();

return(

<>

<button
className="menu-btn"
onClick={()=>
setOpen(!open)
}
>

☰

</button>

<div
className={
open
?
"sidebar show"
:
"sidebar"
}
>

<h2>

🍽 Recipe Tracker

</h2>

<ul>

<li
onClick={()=>
navigate("/")
}
>

🏠 Dashboard

</li>

<li
onClick={()=>
navigate("/recipes")
}
>

🍽 Recipe

</li>

<li
onClick={()=>
navigate("/costing")
}
>

💰 Costing

</li>

<li
onClick={()=>
navigate("/inventory")
}
>

📦 Inventory

</li>

<li
onClick={()=>
navigate("/attendance")
}
>

📅 Attendance

</li>

<li
onClick={()=>
navigate("/reports")
}
>

📊 Reports

</li>

<li
onClick={()=>
navigate("/settings")
}
>

⚙ Settings

</li>

</ul>

</div>

</>

);

}

export default Sidebar;