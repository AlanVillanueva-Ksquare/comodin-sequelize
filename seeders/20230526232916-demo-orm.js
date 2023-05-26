"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // First, insert the Users.
    await queryInterface.bulkInsert("Users", [
      {
        name: "Everiste Galois",
        userName: "galoistito",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "federico gauss",
        userName: "elfede",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Then, insert the Posts.
    await queryInterface.bulkInsert("Posts", [
      {
        text: "Do you like math?",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "The king of geometries",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Finally, insert the Comments.
    await queryInterface.bulkInsert("Comments", [
      {
        text: "How did the proof go?",
        userId: 1,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "I wanna go home?",
        userId: 2,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // You should delete in reverse order due to foreign key constraints.
    // First, delete the Comments.
    await queryInterface.bulkDelete("Comments", null, {});

    // Then, delete the Posts.
    await queryInterface.bulkDelete("Posts", null, {});

    // Finally, delete the Users.
    await queryInterface.bulkDelete("Users", null, {});
  },
};
