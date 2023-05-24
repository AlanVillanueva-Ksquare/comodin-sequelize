import { PostRouter } from "./Post.router";
import { Router } from "express";
import { UserRouter } from "./User.router";
import { CommentRouter } from "./Comment.router";

const APIRouter = Router();

APIRouter.use("/post", PostRouter);
APIRouter.use("/user", UserRouter);
APIRouter.use("/post", CommentRouter);

export default APIRouter;
