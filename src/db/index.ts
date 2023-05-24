import { Sequelize, DataTypes, Model } from "sequelize";
import User, { setupUser } from "../models/User";
import Comment, { setupComment } from "../models/Comment";
import Post, { setupPost } from "../models/Post";
export let sequelize: Sequelize;

export const startDB = async (url: string): Promise<Sequelize> => {
  sequelize = new Sequelize(url);
  setupPost(sequelize);
  setupUser(sequelize);
  setupComment(sequelize);
  // A user can have zero or many posts
  User.hasMany(Post, {
    foreignKey: "userId",
  });

  // Many posts could belong to a user
  Post.belongsTo(User, {
    foreignKey: "userId",
  });

  // A post could have zero or many comments
  Post.hasMany(Comment, {
    foreignKey: "postId",
  });

  // A comment was done by a user and belongs to a post
  Comment.belongsTo(User, {
    foreignKey: "userId",
  });

  Comment.belongsTo(Post, {
    foreignKey: "postId",
  });

  //A user can write many comments
  User.hasMany(Comment, {
    foreignKey: "userId",
  });
  return sequelize;
};
