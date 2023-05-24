import { Router, Request, Response } from "express";
import {
  createComment,
  readCommentsByPost,
} from "../repositories/Comment.repo";
import { IComment } from "../interfaces";
import { readPost } from "../repositories/Post.repo";

export const CommentRouter = Router();

CommentRouter.post("/:postId", async (req: Request, res: Response) => {
  const params = req.params;
  const foundPost = await readPost(Number(params.postId));

  if (!foundPost) {
    return res.sendStatus(404);
  }

  try {
    const { text, userId } = req.body as IComment;
    const newComment = await createComment({
      text,
      userId,
      postId: Number(params.postId),
    });

    return res.send(newComment);
  } catch (error) {
    console.error(error);
  }
});

CommentRouter.get("/:postId/comments", async (req: Request, res: Response) => {
  const params = req.params;
  const foundPost = await readPost(Number(params.postId));

  if (!foundPost) {
    return res.sendStatus(404);
  }

  const allComments = await readCommentsByPost(Number(params.postId));

  if (!allComments) {
    return res.sendStatus(404);
  }

  res.status(200);
  return res.send(foundPost.toJSON());
});
