'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('informes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      peso: {
        type: Sequelize.DOUBLE
      },
      codigo: {
        type: Sequelize.BIGINT
      },
      codigo_usuario: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('informes');
  }
};