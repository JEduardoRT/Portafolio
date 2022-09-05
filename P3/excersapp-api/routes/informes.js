var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Informes = require('../models').informes;

router.get('/', function(req, res, next) {
  let fechaDesde = req.query.fechaDesde;
  let fechaHasta = req.query.fechaHasta;
	let codigoUsuario = parseInt(req.query.codigoUsuario);

  if (fechaDesde && fechaHasta) where.fecha = { [Sequelize.Op.between]: [fechaDesde, fechaHasta]}
  if (codigoUsuario) where.codigo_usuario = { [Sequelize.Op.eq]: codigoUsuario}

  Informes.findAll({ 
        where: {
          ...where
        }, 
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(informes => {  
        res.json(informes);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/:codigo', function(req, res, next) {
  let codigo = parseInt(req.params.codigo);
  Informes.findOne({  
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]}  
    })  
    .then(informes => {  
        res.json(informes);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.post('/', function(req, res, next) {
  Informes.create(
      req.body, {
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(informes => {  
        res.json(informes);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.put('/', function(req, res, next) {
  let codigo = parseInt(req.body.codigo);
  Informes.update(
      req.body, {
        where: {
          codigo: codigo
        },
        attributes: { exclude: ["updatedAt","createdAt","id"]} 
      }
    )  
    .then(informes => {  
        res.json(informes);  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;
