'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class informes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  informes.init({
    fecha: DataTypes.DATE,
    peso: DataTypes.DOUBLE,
    codigo: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    codigo_usuario: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'informes',
    timestamps: false
  });
  return informes;
};