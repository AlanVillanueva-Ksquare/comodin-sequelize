import { Router, Request, Response } from "express";
import { IPost } from "../interfaces";
import { createPost, readPost } from "../repositories/Post.repo";

export const PostRouter = Router();

PostRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { author, text } = req.body as IPost;
    const newPost = await createPost({ author, text });

    return res.send(newPost);
  } catch (error) {
    console.error(error);
  }
});

PostRouter.get("/:postId", async (req: Request, res: Response) => {
  const params = req.params;
  const foundPost = await readPost(Number(params.postId));

  if (!foundPost) {
    return res.sendStatus(404);
  }
  res.status(200);
  return res.send(foundPost.toJSON());
});
