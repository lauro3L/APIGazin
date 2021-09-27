'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
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
      email: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('user');
  }
};
