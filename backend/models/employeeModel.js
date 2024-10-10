import mongoose from "mongoose";
import validator from "validator";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
    minLength: [4, "Name should have more than 4 characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email!"],
    unique: [true, "Email already in use!"],
    validate: [validator.isEmail, "Please enter a valid Email!"],
  },
  mobile: {
    type: Number,
    unique: [true, "Phone Number already in use!"],
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: "Please enter a valid phone number!",
    },
    required: [true, "Please provide your phone number!"],
  },
  designation: {
    type: String,
    enum: ["HR", "Manager", "Sales"],
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F"],
    required: true,
  },
  course: {
    type: String,
    enum: ["MCA", "BCA", "BSC"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const employeeModel =
  mongoose.model.employee || mongoose.model("employee", employeeSchema);

export default employeeModel;