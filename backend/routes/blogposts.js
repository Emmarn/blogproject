import express from "express";
import { getAllPosts, createPost } from '../controllers/blogpost.js'
import createTable from "../createTables.js"

const router = express.Router();

//router.use(createTable)

router.get("/all", getAllPosts)
router.post("/test", createPost)

export default router;