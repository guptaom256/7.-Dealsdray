/* eslint-disable no-unused-vars */
import "./EmployeeList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const EmployeeList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchEmployee = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/employee/list`
    );

    if (response.data.success) {
      setList(response.data.data);
      setLoading(false);
    } else {
      //   toast.error(response.data.message);
      setLoading(false);
    }
  };

  const editEmployee = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteEmployee = async (id) => {
    const response = await axios.post(
      `http://localhost:4000/api/v1/employee/delete/${id}`
    );

    await fetchEmployee();

    if (response.data.success) {
      // toast.success(response.data.message);
      setLoading(false);
    } else {
      // toast.error(response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <>
      <Navbar />
      <div className="employee-list">
        <h1>Employee List</h1>

        <div className="count-btn">
          <p>Total Employee Count: {list.length}</p>
          <button onClick={() => navigate("/create")}>Create Employee</button>
        </div>

        <div className="list-container">
          <div className="header">
            <p>Unique ID</p>
            <p>Image</p>
            <p>Name</p>
            <p>Email</p>
            <p>Mobile No.</p>
            <p>Desgination</p>
            <p>Gender</p>
            <p>Course</p>
            <p>Create Date</p>
            <p>Action</p>
          </div>

          {list.map((employee, index) => {
            return (
              <div key={index} className="content">
                <p>{employee._id}</p>
                <p>
                  <img
                    src={`http://localhost:4000/images/` + employee.image}
                    alt=""
                  />
                </p>
                <p>{employee.name}</p>
                <p>{employee.email}</p>
                <p>{employee.mobile}</p>
                <p>{employee.designation}</p>
                <p>{employee.gender}</p>
                <p>{employee.course}</p>
                <p>Today</p>
                <p>
                  <MdEdit onClick={() => editEmployee(employee._id)} />{" "}
                  <MdDelete onClick={() => deleteEmployee(employee._id)} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
