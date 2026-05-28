import React,{useState} from "react";
import "./CostingPage.css";
import Sidebar from "./Sidebar";

function CostingPage(){

const [items,setItems]=useState([]);

const [form,setForm]=useState({

itemName:"",
qty:"",
uom:"",
alert:"",
cost:"",
category:"",
ingredient:"",
quantity:"",
unit:"",
rate:""

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:

e.target.value

});

};

const addItem=()=>{

if(

!form.ingredient||
!form.quantity||
!form.unit||
!form.rate

){

alert(

"Fill Required Fields"

);

return;

}

setItems([

...items,

{

id:Date.now(),

...form,

amount:

Number(form.quantity)

*

Number(form.rate)

}

]);

setForm({

...form,

ingredient:"",
quantity:"",
unit:"",
rate:""

});

};

const deleteItem=(id)=>{

setItems(

items.filter(

(item)=>

item.id!==id

)

);

};

const totalCost=

items.reduce(

(sum,item)=>

sum+

item.amount,

0

);

return(

<div className="cost-page">

<Sidebar/>

<div className="cost-card">

<h1>

💰 Costing Management

</h1>

<div className="inventory-summary">

<div className="summary-card">

<h2>

{items.length}

</h2>

<p>

Ingredients Added

</p>

</div>

<div className="summary-card">

<h2>

₹ {totalCost}

</h2>

<p>

Recipe Cost

</p>

</div>

<div className="summary-card">

<h2>

{form.itemName||"-"}

</h2>

<p>

Current Recipe

</p>

</div>

</div>

<div className="top-grid">

<input

name="itemName"

placeholder="Recipe Name"

value={form.itemName}

onChange={handleChange}

/>

<input

name="qty"

placeholder="Recipe Qty"

value={form.qty}

onChange={handleChange}

/>

<select

name="uom"

value={form.uom}

onChange={handleChange}

>

<option value="">

UOM

</option>

<option>

Kg

</option>

<option>

Litre

</option>

<option>

Nos

</option>

</select>

<input

name="alert"

placeholder="Alert Qty"

value={form.alert}

onChange={handleChange}

/>

<input

name="cost"

placeholder="Target Cost"

value={form.cost}

onChange={handleChange}

/>

</div>

<div className="ingredient-section">

<div className="left-card">

<h2>

Ingredient Details

</h2>

<div className="ingredient-grid">

<select

name="category"

value={form.category}

onChange={handleChange}

>

<option value="">

Category

</option>

<option>

Food

</option>

<option>

Beverage

</option>

<option>

Packing

</option>

</select>

<select

name="ingredient"

value={form.ingredient}

onChange={handleChange}

>

<option value="">

Ingredient

</option>

<option>

Rice

</option>

<option>

Milk

</option>

<option>

Vegetables

</option>

<option>

Oil

</option>

<option>

Spices

</option>

</select>

<input

name="quantity"

placeholder="Quantity"

value={form.quantity}

onChange={handleChange}

/>

<select

name="unit"

value={form.unit}

onChange={handleChange}

>

<option value="">

Unit

</option>

<option>

Kg

</option>

<option>

Litre

</option>

<option>

Nos

</option>

</select>

<input

name="rate"

placeholder="Rate"

value={form.rate}

onChange={handleChange}

/>

<button

onClick={addItem}

>

+ Add

</button>

</div>

<table>

<thead>

<tr>

<th>

Ingredient

</th>

<th>

Qty

</th>

<th>

Unit

</th>

<th>

Rate

</th>

<th>

Amount

</th>

<th>

Action

</th>

</tr>

</thead>

<tbody>

{

items.length===0

?

(

<tr>

<td
colSpan="6"
>

No Ingredients Added

</td>

</tr>

)

:

(

items.map(

(item)=>(

<tr
key={item.id}
>

<td>

{item.ingredient}

</td>

<td>

{item.quantity}

</td>

<td>

{item.unit}

</td>

<td>

₹ {item.rate}

</td>

<td>

₹ {item.amount}

</td>

<td>

<button

className="delete"

onClick={()=>

deleteItem(item.id)

}

>

Delete

</button>

</td>

</tr>

)

)

)

}

</tbody>

</table>

</div>

<div className="tree-card">

<h2>

Category Tree

</h2>

<div>

🍲 Food

</div>

<div>

🥤 Beverage

</div>

<div>

📦 Packing

</div>

</div>

</div>

<div className="bottom-buttons">

<button>

Save Recipe

</button>

<button>

Clear

</button>

<button>

Export

</button>

</div>

</div>

</div>

);

}

export default CostingPage;