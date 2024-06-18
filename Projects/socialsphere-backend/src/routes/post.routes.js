import { Router } from "express";
import {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.use(verifyJWT);

// router.post("/", createPost);
router.route("/").post(
  upload.fields([
    {
      name: "postImg",
      maxCount: 1,
    },
  ]),

  createPost
);
router.get("/", getAllPost);
router.route("/:postId").delete(deletePost).patch(updatePost);

// router.patch("/:postId", updatePost);
// router.delete("/:postId", deletePost);

export default router;
