import React, { useState } from "react";
import "./RecipePage.css";
import Sidebar from "./Sidebar";

function RecipePage() {

const recipeData = {

Breakfast: {

Idli: {

baseQty: 300,

ingredients: [

{
name: "Idli Rice",
qty: 30,
unit: "Kg",
price: 55
},

{
name: "Urud Dal",
qty: 5,
unit: "Kg",
price: 120
},

{
name: "Rock Salt",
qty: 1,
unit: "Kg",
price: 20
}

]

},

Pongal: {

baseQty: 100,

ingredients: [

{
name: "Rice",
qty: 10,
unit: "Kg",
price: 60
},

{
name: "Moong Dal",
qty: 3,
unit: "Kg",
price: 110
},

{
name: "Pepper",
qty: 0.5,
unit: "Kg",
price: 500
},

{
name: "Ghee",
qty: 1,
unit: "L",
price: 600
}

]

},

Dosai: {

baseQty: 200,

ingredients: [

{
name: "Rice",
qty: 20,
unit: "Kg",
price: 60
},

{
name: "Urud Dal",
qty: 4,
unit: "Kg",
price: 120
},

{
name: "Oil",
qty: 2,
unit: "L",
price: 150
}

]

}

},

Lunch: {

"Veg Biryani": {

baseQty: 100,

ingredients: [

{
name: "Rice",
qty: 15,
unit: "Kg",
price: 60
},

{
name: "Mixed Vegetables",
qty: 10,
unit: "Kg",
price: 80
},

{
name: "Oil",
qty: 2,
unit: "L",
price: 150
},

{
name: "Spices",
qty: 1,
unit: "Kg",
price: 400
}

]

},

"Tomato Rice": {

baseQty: 100,

ingredients: [

{
name: "Rice",
qty: 12,
unit: "Kg",
price: 60
},

{
name: "Tomato",
qty: 8,
unit: "Kg",
price: 40
},

{
name: "Oil",
qty: 1.5,
unit: "L",
price: 150
}

]

}

},

Snacks: {

Samosa: {

baseQty: 100,

ingredients: [

{
name: "Maida",
qty: 5,
unit: "Kg",
price: 45
},

{
name: "Potato",
qty: 8,
unit: "Kg",
price: 35
},

{
name: "Oil",
qty: 3,
unit: "L",
price: 150
}

]

}

},

Dinner: {

Chapati: {

baseQty: 100,

ingredients: [

{
name: "Wheat Flour",
qty: 12,
unit: "Kg",
price: 55
},

{
name: "Oil",
qty: 1,
unit: "L",
price: 150
},

{
name: "Salt",
qty: 0.5,
unit: "Kg",
price: 20
}

]

}

}

};

const [form, setForm] = useState({

group: "",
menuType: "",
recipeName: "",
totalQty: ""

});

const [ingredientList, setIngredientList] = useState([]);

const handleChange = (e) => {

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const calculateIngredients = () => {

if (

!form.menuType ||
!form.recipeName ||
!form.totalQty

) {

alert("Please Fill All Fields");

return;

}

const recipe =
recipeData[form.menuType][form.recipeName];

const multiplier =
Number(form.totalQty) / recipe.baseQty;

const calculated =
recipe.ingredients.map((item) => {

const requiredQty =
(item.qty * multiplier);

const totalCost =
requiredQty * item.price;

return {

...item,

requiredQty:
requiredQty.toFixed(2),

totalCost:
totalCost.toFixed(2)

};

});

setIngredientList(calculated);

};

return (

<div className="recipe-page">

<Sidebar />

<div className="recipe-container">

<div className="page-header">

<h1>
🍽 Recipe Management
</h1>

<p>
Smart Kitchen Recipe & Cost Calculator
</p>

</div>

<div className="recipe-form-card">

{/* GROUP */}

<div className="form-group">

<label>
Group
</label>

<select
name="group"
value={form.group}
onChange={handleChange}
>

<option value="">
Select Group
</option>

<option value="Food">
Food
</option>

<option value="Beverage">
Beverage
</option>

</select>

</div>

{/* MENU TYPE */}

<div className="form-group">

<label>
Menu Type
</label>

<select
name="menuType"
value={form.menuType}
onChange={handleChange}
>

<option value="">
Select Menu
</option>

<option value="Breakfast">
Breakfast
</option>

<option value="Lunch">
Lunch
</option>

<option value="Snacks">
Snacks
</option>

<option value="Dinner">
Dinner
</option>

</select>

</div>

{/* RECIPE */}

<div className="form-group">

<label>
Recipe Name
</label>

<select
name="recipeName"
value={form.recipeName}
onChange={handleChange}
>

<option value="">
Select Recipe
</option>

{
form.menuType &&
Object.keys(
recipeData[form.menuType]
).map((recipe)=>(

<option
key={recipe}
value={recipe}
>

{recipe}

</option>

))
}

</select>

</div>

{/* QUANTITY */}

<div className="form-group">

<label>
Total Quantity
</label>

<input
type="number"
name="totalQty"
placeholder="Enter Quantity"
value={form.totalQty}
onChange={handleChange}
/>

</div>

</div>

<button
className="calculate-btn"
onClick={calculateIngredients}
>

Calculate Ingredients

</button>

{/* TABLE */}

{
ingredientList.length > 0 && (

<div className="table-card">

<h2>
Required Ingredients
</h2>

<table>

<thead>

<tr>

<th>
S.No
</th>

<th>
Ingredient
</th>

<th>
Quantity
</th>

<th>
Unit
</th>

<th>
Price / Unit
</th>

<th>
Total Cost
</th>

</tr>

</thead>

<tbody>

{
ingredientList.map((item,index)=>(

<tr key={index}>

<td>
{index + 1}
</td>

<td>
{item.name}
</td>

<td>
{item.requiredQty}
</td>

<td>
{item.unit}
</td>

<td>
₹ {item.price}
</td>

<td>
₹ {item.totalCost}
</td>

</tr>

))
}

</tbody>

</table>

<div className="recipe-total">

<h2>

Total Recipe Cost :

₹ {

ingredientList.reduce(

(sum,item)=>

sum +
Number(item.totalCost),

0

).toFixed(2)

}

</h2>

</div>

</div>

)
}

</div>

</div>

);

}

export default RecipePage;