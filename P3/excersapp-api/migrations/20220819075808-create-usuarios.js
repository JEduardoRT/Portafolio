'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      imc: {
        type: Sequelize.DOUBLE
      },
      codigo: {
        type: Sequelize.BIGINT
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.DOUBLE
      },
      peso_max: {
        type: Sequelize.DOUBLE
      },
      peso_min: {
        type: Sequelize.DOUBLE
      },
      altura: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('usuarios');
  }
};