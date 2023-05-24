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
exports.UserRouter = void 0;
const express_1 = require("express");
const User_repo_1 = require("../repositories/User.repo");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, userName } = req.body;
        const newUser = yield (0, User_repo_1.createUser)({
            name,
            userName,
        });
        return res.send(newUser);
    }
    catch (error) {
        console.error(error);
    }
}));
exports.UserRouter.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const foundUser = yield (0, User_repo_1.readUser)(Number(params.userId));
    if (!foundUser) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(foundUser.toJSON());
}));
exports.UserRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, User_repo_1.readAllUsers)();
    if (!allUsers) {
        return res.sendStatus(404);
    }
    res.status(200);
    return res.send(allUsers);
}));
