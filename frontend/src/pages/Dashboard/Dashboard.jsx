import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {

  const navigate = useNavigate();

  function handleBtnClick () {
    navigate("/create");
  }


  return (
    <>
    <Navbar />
    <div className="dashboard">
      <div className="create-employee">
        <button onClick={handleBtnClick}>Create Employee</button>
      </div>
      <h1>Welcome To Admin Panel</h1>
    </div>
    </>
  );
};

export default Dashboard;
