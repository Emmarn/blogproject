import express from "express";
import { verifyToken } from "../controllers/auth.js";
import { listUsers, getUsers, getUserByJwt } from "../controllers/user.js";

const router = express.Router();

router.post("/test3", (req, res) => {
    //tagen data från req.
    verifyToken()
})

router.post('/find', getUsers)
router.get("/findByJwt", getUserByJwt)

export default router;