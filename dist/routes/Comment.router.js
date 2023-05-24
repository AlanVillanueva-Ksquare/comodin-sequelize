"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRouter = void 0;
const express_1 = require("express");
const Comment_repo_1 = require("../repositories/Comment.repo");
const Post_repo_1 = require("../repositories/Post.repo");
exports.CommentRouter = (0, express_1.Router)();
exports.CommentRouter.post("/:postId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const foundPost = yield (0, Post_repo_1.readPost)(Number(params.postId));
    if (!foundPost) {
        return res.sendStatus(404);
    }
    try {
        const { text, userId } = req.body;
        const newComment = yield (0, Comment_repo_1.createComment)({
            text,
            userId,
            postId: Number(params.postId),
        });
        return res.send(newComment);
    }
    catch (error) {
        console.error(error);
    }
}));
exports.CommentRouter.get("/:postId/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const foundPost = yield (0, Post_repo_1.readPost)(Number(params.postId));
    if (!foundPost) {
        return res.sendStatus(404);
    }
    const allComments = yield (0, Comment_repo_1.readCommentsByPost)(Number(params.postId));
    if (!allComments) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(foundPost.toJSON());
}));
