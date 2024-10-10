import express from "express";
import { addEmployee, getEmployee, listemployees, removeEmployee, updateEmployeeDetails } from "../controllers/employeeController.js";
import multer from "multer";

const employeeRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
})

const upload = multer({storage: storage});

employeeRouter.post("/add", upload.single("image"), addEmployee);
employeeRouter.get("/list", listemployees);
employeeRouter.get("/getemployee/:id", getEmployee);
employeeRouter.post("/delete/:id", removeEmployee);
employeeRouter.put("/update/:id", updateEmployeeDetails);

export default employeeRouter;