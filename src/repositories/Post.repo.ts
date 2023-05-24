//generar todos los metodos que interactuan con la base de datos
import Post from "../models/Post";
import { IPost } from "../interfaces";

export const createPost = async ({
  author,
  text,
}: IPost): Promise<Post | null> => {
  const response = await Post.create({
    author,
    text,
  });

  return response;
};

export const readPost = async (id: number): Promise<Post | null> => {
  const response = await Post.findByPk(id);

  return response;
};
