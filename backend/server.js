import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js"
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import employeeRouter from "./routes/employeeRoute.js";

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// api endpoints
app.use("/api/v1/user", userRouter);
app.use("/api/v1/employee", employeeRouter);
app.use("/images", express.static('uploads'));


app.get("/",  (req, res) => {
    res.send("API Working"); 
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})