'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    codigo: {
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    fecha_nacimiento: DataTypes.DATE,
    imc: DataTypes.DOUBLE,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    peso: DataTypes.DOUBLE,
    peso_max: DataTypes.DOUBLE,
    peso_min: DataTypes.DOUBLE,
    altura: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'usuarios',
    timestamps: false
  });
  return usuarios;
};