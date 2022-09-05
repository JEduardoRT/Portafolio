'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ejercicios_entrenamiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ejercicios_entrenamiento.init({
    codigo: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    codigo_entrenamiento: DataTypes.BIGINT,
    codigo_ejercicio: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'ejercicios_entrenamiento',
    timestamps: false
  });
  return ejercicios_entrenamiento;
};