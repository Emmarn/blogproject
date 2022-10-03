import express from "express";
import userRoute from "../backend/routes/users.js";
import authRoute from "../backend/routes/auth.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express()


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


app.listen(8000, () => {
    console.log("Server running on port 8000")
})