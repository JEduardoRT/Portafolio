var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const EjerciciosEntrenamiento = require('../models').ejercicios_entrenamiento;

router.get('/', function(req, res, next) {
  const where= {}
	let codigoEntrenamiento = parseInt(req.query.codigoEntrenamiento);
	let codigoEjercicio = parseInt(req.query.codigoEjercicio);
  
  if (codigoEjercicio) where.codigo_ejercicio = { [Sequelize.Op.eq]: codigoEjercicio}
  if (codigoEntrenamiento) where.codigo_entrenamiento = { [Sequelize.Op.eq]: codigoEntrenamiento}

  EjerciciosEntrenamiento.findAll({  
        where: {
          ...where
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(ejerciciosEntrenamiento => {  
        res.json(ejerciciosEntrenamiento);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/:codigo', function(req, res, next) {
  let codigo = parseInt(req.params.codigo);
  EjerciciosEntrenamiento.findOne({  
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(ejerciciosEntrenamientos => {  
        res.json(ejerciciosEntrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.post('/', function(req, res, next) {
  EjerciciosEntrenamiento.create(
      req.body, {
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(ejerciciosEntrenamientos => {  
        res.json(ejerciciosEntrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.put('/', function(req, res, next) {
  let codigo = parseInt(req.body.codigo);
  EjerciciosEntrenamiento.update(
      req.body, {
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(ejerciciosEntrenamientos => {  
        res.json(ejerciciosEntrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;
