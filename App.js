

import{ Route, Routes } from "react-router-dom";
import { EmployeeList } from "./components/EmployeeList";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

 import { Logout } from "./components/Logout";
import { Login } from "./components/Login"
import { EmployeeDetails} from "./components/Employdetail.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<EmployeeList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Logout/>}/>
        <Route path="/login/:id" element={<EmployeeDetails/>}/>
      </Routes>
  
     </div>
  );
}

export default App;
