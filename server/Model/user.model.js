const Sequelize = require('sequelize');
const Event = require('./event.model')


const User = (sequelize) => sequelize.define ('user', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  firstName: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },

  aboutMe: {
    type: Sequelize.DataTypes.STRING,
  },

  profilePicture: {
    type: Sequelize.DataTypes.STRING,
  },

  status: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: 'harvest'
  },

  affiliateLink: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: ''
  }, 
  children: {
    type: Sequelize.DataTypes.TEXT,
    defaultValue: JSON.stringify([])
  }
})





module.exports = User