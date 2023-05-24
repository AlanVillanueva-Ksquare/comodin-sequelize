import Comment from "../models/Comment";
import { IComment } from "../interfaces";

export const createComment = async ({
  text,
  userId,
  postId,
}: IComment): Promise<Comment | null> => {
  const response = await Comment.create({
    text,
    userId,
    postId,
  });

  return response;
};

export const readCommentsByPost = async (
  postId: number
): Promise<Comment[] | null> => {
  const response = await Comment.findAll({
    where: {
      postId: postId,
    },
  });
  return response;
};
