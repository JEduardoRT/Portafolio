'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 1; i <=10; i++) {  
      await queryInterface.bulkInsert('ejercicios', [{  
          titulo: 'EJERCICIO '+i,  
          codigo: i,  
		  tiempo: 120,
		  musculo: 'Cuadriceps',
		  tipo: 'C' 
      }], {});  
   }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ejercicios', null, {});  
  }
};
