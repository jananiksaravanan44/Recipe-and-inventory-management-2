import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import RecipePage from "./RecipePage";
import CostingPage from "./CostingPage";
import InventoryPage from "./InventoryPage";
import AttendancePage from "./AttendencePage";
import ReportsPage from "./ReportsPage";

function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<LoginPage/>}
/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>
<Route
path="/recipes"
element={<RecipePage/>}
/>

<Route
path="/costing"
element={<CostingPage/>}
/>


<Route
path="/inventory"
element={<InventoryPage/>}
/>

<Route
path="/attendance"
element={<AttendancePage/>}
/>

<Route
path="/reports"
element={<ReportsPage/>}
/>
</Routes>

</BrowserRouter>

);

}

export default App;