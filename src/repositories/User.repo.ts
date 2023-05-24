import User from "../models/User";
import { IUser } from "../interfaces";

export const createUser = async ({
  name,
  userName,
}: IUser): Promise<User | null> => {
  const response = await User.create({
    name,
    userName,
  });
  return response;
};

export const readUser = async (id: number): Promise<User | null> => {
  const response = await User.findByPk(id);
  return response;
};

export const readAllUsers = async (): Promise<User[] | null> => {
  const response = await User.findAll();
  return response;
};
