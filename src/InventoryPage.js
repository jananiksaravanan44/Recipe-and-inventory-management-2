 import React, { useState } from "react";
import "./InventoryPage.css";
import Sidebar from "./Sidebar";

function InventoryPage() {

const [inventory,setInventory]=useState([]);

const [distribution,setDistribution]=useState([]);

const [search,setSearch]=useState("");

const [form,setForm]=useState({

name:"",
category:"",
quantity:"",
price:"",
alert:""

});

const [distributionForm,setDistributionForm]=useState({

item:"",
studentBlock:"",
issuedQty:"",
date:"",
issuedBy:"",
receivedBy:""

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const handleDistributionChange=(e)=>{

setDistributionForm({

...distributionForm,

[e.target.name]:
e.target.value

});

};

const addItem=()=>{

if(

!form.name||
!form.category||
!form.quantity||
!form.price

){

alert(
"Fill Required Fields"
);

return;

}

setInventory([

...inventory,

{

id:Date.now(),

...form

}

]);

setForm({

name:"",
category:"",
quantity:"",
price:"",
alert:""

});

};

const addDistribution=()=>{

if(

!distributionForm.item||
!distributionForm.studentBlock||
!distributionForm.issuedQty

){

alert("Fill Required Fields");

return;

}

const inventoryItem=

inventory.find(

(item)=>

item.name===distributionForm.item

);

if(!inventoryItem){

alert("Item Not Found");

return;

}

const issuedQty=

Number(distributionForm.issuedQty);

const currentQty=

Number(inventoryItem.quantity);

/* CHECK STOCK */

if(issuedQty>currentQty){

alert(

`Only ${currentQty} items available in stock`

);

return;

}

/* UPDATE INVENTORY */

const updatedInventory=

inventory.map((item)=>{

if(item.name===distributionForm.item){

return{

...item,

quantity:

currentQty-issuedQty

};

}

return item;

});

setInventory(updatedInventory);

/* SAVE DISTRIBUTION */

setDistribution([

...distribution,

{

id:Date.now(),

...distributionForm,

remainingStock:

currentQty-issuedQty

}

]);

/* RESET FORM */

setDistributionForm({

item:"",
studentBlock:"",
issuedQty:"",
date:"",
issuedBy:"",
receivedBy:""

});

};

const deleteItem=(id)=>{

setInventory(

inventory.filter(

(item)=>

item.id!==id

)

);

};

const getStatus=(item)=>{

const qty=

Number(
item.quantity
);

const alert=

Number(
item.alert||0
);

if(qty===0){

return "❌ Out Of Stock";

}

if(

alert>0&&
qty<=alert

){

return "⚠ Low Stock";

}

return "✅ In Stock";

};

const filteredInventory=

inventory.filter(

(item)=>

item.name

.toLowerCase()

.includes(

search

.toLowerCase()

)

);

const lowStock=

inventory.filter(

(item)=>

Number(item.quantity)

<=

Number(item.alert||0)

&&

Number(item.quantity)>0

).length;

return(

<div className="inventory-page">

<Sidebar/>

<div className="inventory-layout">

{/* LEFT SIDE */}

<div className="inventory-left">

<div className="inventory-card">

<h1>
📦 Inventory Management
</h1>

<div className="inventory-summary">

<div className="summary-card">

<h2>
{inventory.length}
</h2>

<p>
Total Items
</p>

</div>

<div className="summary-card">

<h2>
{lowStock}
</h2>

<p>
Low Stock
</p>

</div>

<div className="summary-card">

<h2>

₹

{
inventory.reduce(
(sum,item)=>
sum+
(
Number(item.price)
*
Number(item.quantity)
),
0
)
}

</h2>

<p>
Inventory Value
</p>

</div>

</div>

<div className="top-section">

<input
placeholder="🔍 Search Inventory"
value={search}
onChange={(e)=>
setSearch(e.target.value)
}
/>

</div>

{/* ADD INVENTORY */}

<div className="add-form">

<input
name="name"
placeholder="Item Name"
value={form.name}
onChange={handleChange}
/>

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
Raw Material
</option>

<option>
Packaging
</option>

</select>

<input
name="quantity"
placeholder="Stock Qty"
value={form.quantity}
onChange={handleChange}
/>

<input
name="price"
placeholder="Unit Price"
value={form.price}
onChange={handleChange}
/>

<input
name="alert"
placeholder="Low Alert Qty"
value={form.alert}
onChange={handleChange}
/>

<button onClick={addItem}>
Add Item
</button>

</div>

{/* INVENTORY TABLE */}

<table>

<thead>

<tr>

<th>
Item
</th>

<th>
Category
</th>

<th>
Current Qty
</th>

<th>
Price
</th>

<th>
Status
</th>

<th>
Action
</th>

</tr>

</thead>

<tbody>

{
filteredInventory.length===0

?

<tr>

<td colSpan="6">
No Inventory Found
</td>

</tr>

:

filteredInventory.map((item)=>(

<tr key={item.id}>

<td>
{item.name}
</td>

<td>
{item.category}
</td>

<td>
{item.quantity}
</td>

<td>
₹{item.price}
</td>

<td>
{getStatus(item)}
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

))
}

</tbody>

</table>

</div>

</div>

{/* RIGHT SIDE */}

<div className="inventory-right">

<div className="distribution-card">

<h2>
🍽 Kitchen Distribution Management
</h2>

<div className="distribution-form">

<select
name="item"
value={distributionForm.item}
onChange={handleDistributionChange}
>

<option value="">
Select Item
</option>

{
inventory.map((item)=>(

<option
key={item.id}
value={item.name}
>

{item.name}

</option>

))
}

</select>

<input
name="studentBlock"
placeholder="Student / Hostel Block"
value={distributionForm.studentBlock}
onChange={handleDistributionChange}
/>

<input
name="issuedQty"
placeholder="Issued Quantity"
value={distributionForm.issuedQty}
onChange={handleDistributionChange}
/>

<input
type="date"
name="date"
value={distributionForm.date}
onChange={handleDistributionChange}
/>

<input
name="issuedBy"
placeholder="Issued By"
value={distributionForm.issuedBy}
onChange={handleDistributionChange}
/>

<input
name="receivedBy"
placeholder="Received By"
value={distributionForm.receivedBy}
onChange={handleDistributionChange}
/>

<button
onClick={addDistribution}
>

Issue Item

</button>

</div>

{/* DISTRIBUTION TABLE */}

<table className="distribution-table">

<thead>

<tr>

<th>
Item
</th>

<th>
Student Block
</th>

<th>
Qty Issued
</th>

<th>
Date
</th>

<th>
Issued By
</th>

<th>
Received By
</th>

<th>
Remaining Stock
</th>

</tr>

</thead>

<tbody>

{
distribution.length===0

?

<tr>

<td colSpan="7">
No Distribution Records
</td>

</tr>

:

distribution.map((data)=>(

<tr key={data.id}>

<td>
{data.item}
</td>

<td>
{data.studentBlock}
</td>

<td>
{data.issuedQty}
</td>

<td>
{data.date}
</td>

<td>
{data.issuedBy}
</td>

<td>
{data.receivedBy}
</td>

<td>
{data.remainingStock}
</td>

</tr>

))
}

</tbody>

</table>

</div>

</div>

</div>

</div>

);
}

export default InventoryPage;