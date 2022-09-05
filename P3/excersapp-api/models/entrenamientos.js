'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entrenamientos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  entrenamientos.init({
    titulo: DataTypes.STRING,
    categoria: DataTypes.STRING,
    codigo: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    tiempo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'entrenamientos',
    timestamps: false
  });
  return entrenamientos;
};