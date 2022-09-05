'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ejercicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ejercicios.init({
    codigo: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    titulo: DataTypes.STRING,
    tiempo: DataTypes.INTEGER,
    musculo: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ejercicios',
    timestamps: false
  });
  return ejercicios;
};