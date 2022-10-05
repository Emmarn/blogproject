import express from "express";
import { register, login, logout, verifyToken } from "../controllers/auth.js";


const router = express.Router();
router.use(express.json());

router.post("/register", register)
router.post("/login", (req, res) => {
    let user = req.body

    console.log(user, "this is user !");
    login(user).then(res => console.log(res))
});
router.post("/logout", logout)
router.post("/verify", async (req, res) => {
    let response = await verifyToken(req.body.localStorage)
    console.log(response, " ad sdas asd ads sd ad as-------------------------")

    res.send(response)
})

export default router;