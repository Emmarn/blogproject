import express from "express";
import { verifyToken } from "../controllers/auth.js";
import { listUsers } from "../controllers/user.js";

const router = express.Router();

router.post("/test3", (req, res) => {
    //tagen data från req.
    verifyToken()
})

router.route('/users').get(listUsers)

export default router;