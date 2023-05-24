import { Router, Request, Response } from "express";
import { createUser, readAllUsers, readUser } from "../repositories/User.repo";
import { IUser } from "../interfaces";

export const UserRouter = Router();

UserRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, userName } = req.body as IUser;
    const newUser = await createUser({
      name,
      userName,
    });
    return res.send(newUser);
  } catch (error) {
    console.error(error);
  }
});

UserRouter.get("/:userId", async (req: Request, res: Response) => {
  const params = req.params;
  const foundUser = await readUser(Number(params.userId));

  if (!foundUser) {
    return res.sendStatus(404);
  }
  res.status(200);
  return res.send(foundUser.toJSON());
});

UserRouter.get("/", async (req: Request, res: Response) => {
  const allUsers = await readAllUsers();

  if (!allUsers) {
    return res.sendStatus(404);
  }
  res.status(200);
  return res.send(allUsers);
});
