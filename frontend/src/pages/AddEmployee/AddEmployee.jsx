import { useState } from "react";
import "./AddEmploye.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const AddEmployee = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", Number(data.mobile));
    formData.append("designation", data.designation);
    formData.append("gender", data.gender);
    formData.append("course", data.course);
    formData.append("image", image);

    console.log("Formdata: ", formData);

    const response = await axios.post(
      `http://localhost:4000/api/v1/employee/add`,
      formData
    );

    if (response.data.success) {
      setData({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        gender: "",
        course: "",
      });
      setImage(false);
      navigate("/list");
      //   toast.success(response.data.message);
    } else {
      //   toast.error(response.data.message);
    }
  };

  return (
    <>
    <Navbar />
    <div className="add-emp">
      <h1>Add new Employee</h1>

      <div className="inp-container">
        <form onSubmit={submitHandler} action="">
          <div className="emp-inp">
            <p>Name: </p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Enter name..."
              required
            />
          </div>

          <div className="emp-inp">
            <p>Email: </p>
            <input
              onChange={onChangeHandler}
              value={data.email}
              type="text"
              name="email"
              placeholder="Enter email..."
              required
              />
          </div>

          <div className="emp-inp">
            <p>Mobile No.: </p>
            <input
              onChange={onChangeHandler}
              value={data.mobile}
              type="number"
              name="mobile"
              placeholder="Enter mobile number..."
              required
            />
          </div>

          <div className="emp-inp">
            <p>Designation: </p>
            <input
              onChange={onChangeHandler}
              value={data.designation}
              type="text"
              name="designation"
              placeholder="Enter designation..."
              required
              />
          </div>

          <div className="emp-inp">
            <p>Gender: </p>
            <input
              onChange={onChangeHandler}
              value={data.gender}
              type="text"
              name="gender"
              placeholder="Enter gender..."
              required
              />
          </div>

          <div className="emp-inp">
            <p>Course: </p>
            <input
              onChange={onChangeHandler}
              value={data.course}
              type="text"
              name="course"
              placeholder="Enter course..."
              required
              />
          </div>

          <div className="emp-inp">
            <p>Profile Image: </p>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              required
              />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
              </>
  );
};

export default AddEmployee;
