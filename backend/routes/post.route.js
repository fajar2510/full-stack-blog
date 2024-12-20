import express from "express";
import { getPosts, getPost, createPost, deletePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts); // get all post
router.get("/:slug", getPost); // get single post
router.post("/", createPost); // post single post
router.delete("/:id", deletePost); // delete single post

export default router;
