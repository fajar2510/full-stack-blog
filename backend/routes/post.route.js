import express from "express";
import { 
    getPosts, 
    getPost, 
    createPost, 
    deletePost 
} from "../controllers/post.controller.js";

const router = express.Router();

// router.get("/upload-auth", uploadAuth);

router.get("/", getPosts); // get all post
// router.get("/:slug", increaseVisit, getPost);
router.get("/:slug", getPost); // get single post
router.post("/", createPost); // post single post
router.delete("/:id", deletePost); // delete single post

// router.patch("/feature", featurePost);

export default router;
