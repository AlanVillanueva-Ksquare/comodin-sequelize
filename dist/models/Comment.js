"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupComment = void 0;
const sequelize_1 = require("sequelize");
class Comment extends sequelize_1.Model {
}
const setupComment = (sequelize) => {
    Comment.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id",
            },
        },
        postId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Posts",
                key: "id",
            },
        },
    }, { sequelize, modelName: "Comment" });
};
exports.setupComment = setupComment;
exports.default = Comment;
