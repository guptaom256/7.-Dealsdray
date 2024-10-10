import employeeModel from "../models/employeeModel.js";
import fs from "fs";

// add new employee
export const addEmployee = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const employee = new employeeModel({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    designation: req.body.designation,
    gender: req.body.gender,
    course: req.body.course,
    image: image_filename,
  });

  try {
    await employee.save();
    res.json({
      success: true,
      message: "Employee Added!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// all employees list
export const listemployees = async (req, res) => {
  try {
    const employees = await employeeModel.find({});

    res.json({
      success: true,
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// get one employee
export const getEmployee = async(req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeModel.findById(id);
    res.json({
      success: true,
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
}

//Delete a Employee
export const removeEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeModel.findById(id);

    fs.unlink(`uploads/${employee.image}`, () => {});

    await employeeModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Employee Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// Update/Edit Employee Details
export const updateEmployeeDetails = async (req, res) => {
  try {
    const { id } = req.params;
    let employee = await employeeModel.findById(id);

    if (!employee) {
      res.json({
        success: false,
        message: "Employee Not Found!",
      });
    }

    employee = await employeeModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.json({
      success: true,
      message: "Employee details updated successfully!",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};