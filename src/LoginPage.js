import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {

const [showPassword,setShowPassword]=useState(false);

const [loginData,setLoginData]=useState({
email:"",
password:"",
remember:false
});

const navigate = useNavigate();
const handleChange=(e)=>{

const {name,value,checked,type}=e.target;

setLoginData({
...loginData,
[name]:
type==="checkbox"
? checked
: value
});

};

const handleSubmit=(e)=>{

e.preventDefault();

navigate("/dashboard");

};

return(

<div className="login-page">

<div className="overlay"></div>

<div className="login-container">

<div className="left-section">

<div className="logo-box">
🍽️
</div>

<h1>
Recipe & Inventory Tracker
</h1>

<p>
Hotel Management College Dashboard
</p>

<div className="info-cards">

<div className="mini-card">
📖
<span>Recipes</span>
</div>

<div className="mini-card">
📦
<span>Inventory</span>
</div>

<div className="mini-card">
📊
<span>Analytics</span>
</div>

<div className="mini-card">
👨‍🍳
<span>Kitchen</span>
</div>

</div>

</div>

<div className="right-section">

<form
className="login-card"
onSubmit={handleSubmit}
>

<h2>
Welcome Back
</h2>

<p>
Login to continue
</p>

<input
type="email"
name="email"
placeholder="College Email"
value={loginData.email}
onChange={handleChange}
required
/>

<div className="password-box">

<input
type={
showPassword
?
"text"
:
"password"
}
name="password"
placeholder="Password"
value={loginData.password}
onChange={handleChange}
required
/>

<button
type="button"
onClick={()=>
setShowPassword(
!showPassword
)
}
>
{
showPassword
?
"🙈"
:
"👁"
}
</button>

</div>

<div className="extra">

<label>

<input
type="checkbox"
name="remember"
checked={
loginData.remember
}
onChange={handleChange}
/>

Remember Me

</label>

<a href="/">
Forgot Password?

</a>

</div>

<button
className="login-btn"
>

Enter Dashboard

</button>

</form>

</div>

</div>

</div>

);

}

export default LoginPage;