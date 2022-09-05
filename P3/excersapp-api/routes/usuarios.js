var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Usuarios = require('../models').usuarios;

router.get('/', function(req, res, next) {
  Usuarios.findAll({  
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(usuarios => {  
        res.json(usuarios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/:codigo', function(req, res, next) {
  let codigo = parseInt(req.params.codigo);
  Usuarios.findOne({  
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(usuarios => {  
        res.json(usuarios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.post('/', function(req, res, next) {
  Usuarios.create(
      req.body, {
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(usuarios => {  
        res.json(usuarios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.put('/', function(req, res, next) {
  let codigo = parseInt(req.body.codigo);
  Usuarios.update(
      req.body, {
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(usuarios => {  
        res.json(usuarios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;
