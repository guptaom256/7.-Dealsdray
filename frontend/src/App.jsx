import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import AddEmployee from "./pages/AddEmployee/AddEmployee.jsx";
import EditEmployee from "./pages/EditEmployee/EditEmployee.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/create" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;