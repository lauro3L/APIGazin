'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('developers',{
      id: {
        type: Sequelize.INTEGER,      
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      sexo: {
        type: Sequelize.CHAR(1),
        allowNull: false

      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hobby: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      datanascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        type:Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull: false
      }


    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('developers');
  }
};
