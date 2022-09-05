var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Ejercicios = require('../models').ejercicios;

router.get('/', function(req, res, next) {
  const where = {}
  let titulo = req.query.titulo;
	let musculo = req.query.musculo;
	let tipo =  req.query.tipo;
  if (titulo) where.titulo = { [Sequelize.Op.eq]: titulo}
  if (titulo) where.musculo = { [Sequelize.Op.eq]: musculo}
  if (titulo) where.tipo = { [Sequelize.Op.eq]: tipo}
  Ejercicios.findAll({  
        where: {
          ...where
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(ejercicios => {  
        res.json(ejercicios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/:codigo', function(req, res, next) {
  let codigo = parseInt(req.params.codigo);
  Ejercicios.findOne({  
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(ejercicios => {  
        res.json(ejercicios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.post('/', function(req, res, next) {
  Ejercicios.create(
      req.body, {
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(ejercicios => {  
        res.json(ejercicios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.put('/', function(req, res, next) {
  let codigo = parseInt(req.body.codigo);
  Ejercicios.update(
      req.body, {
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(ejercicios => {  
        res.json(ejercicios);  
    })  
    .catch(error => res.status(400).send(error)) 
});
module.exports = router;
