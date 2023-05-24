"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUser = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
const setupUser = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: sequelize_1.DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    }, { sequelize, modelName: "User" });
};
exports.setupUser = setupUser;
exports.default = User;
