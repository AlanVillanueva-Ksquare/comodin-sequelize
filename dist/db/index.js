"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.startDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const User_1 = __importStar(require("../models/User"));
const Comment_1 = __importStar(require("../models/Comment"));
const Post_1 = __importStar(require("../models/Post"));
const startDB = (url) => __awaiter(void 0, void 0, void 0, function* () {
    exports.sequelize = new sequelize_1.Sequelize(url);
    (0, Post_1.setupPost)(exports.sequelize);
    (0, User_1.setupUser)(exports.sequelize);
    (0, Comment_1.setupComment)(exports.sequelize);
    // A user can have zero or many posts
    User_1.default.hasMany(Post_1.default, {
        foreignKey: "userId",
    });
    // Many posts could belong to a user
    Post_1.default.belongsTo(User_1.default, {
        foreignKey: "userId",
    });
    // A post could have zero or many comments
    Post_1.default.hasMany(Comment_1.default, {
        foreignKey: "postId",
    });
    // A comment was done by a user and belongs to a post
    Comment_1.default.belongsTo(User_1.default, {
        foreignKey: "userId",
    });
    Comment_1.default.belongsTo(Post_1.default, {
        foreignKey: "postId",
    });
    //A user can write many comments
    User_1.default.hasMany(Comment_1.default, {
        foreignKey: "userId",
    });
    return exports.sequelize;
});
exports.startDB = startDB;
