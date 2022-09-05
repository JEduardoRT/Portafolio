var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Entrenamientos = require('../models').entrenamientos;

router.get('/', function(req, res, next) {
  const where= {}
  let titulo = req.query.titulo;
	let categoria = req.query.categoria;
  
  if (titulo) where.titulo = { [Sequelize.Op.like]: '%${titulo}%'}
  if (categoria) where.categoria = { [Sequelize.Op.eq]: categoria}

  Entrenamientos.findAll({  
        where: {
          ...where
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(entrenamientos => {  
        res.json(entrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/categorias', function(req, res, next) {
  const where= {}

  Entrenamientos.findAll({
        attributes: [
          [Sequelize.fn('DISTINCT', Sequelize.col('categoria')) ,'categoria'],
        ]
    })  
    .then(entrenamientos => {  
        res.json(entrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/:codigo', function(req, res, next) {
  let codigo = parseInt(req.params.codigo);
  Entrenamientos.findOne({  
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(entrenamientos => {  
        res.json(entrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.post('/', function(req, res, next) {
  Entrenamientos.create(
      req.body,
      {
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(entrenamientos => {  
        res.json(entrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.put('/', function(req, res, next) {
  let codigo = parseInt(req.body.codigo);
  Entrenamientos.update(
      req.body, {
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(entrenamientos => {  
        res.json(entrenamientos);  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;
