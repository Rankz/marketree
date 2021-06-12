const Sequelize = require('sequelize');

const User = require('./user.model')


const Event = (sequelize) => sequelize.define('event', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  date: {
    type: Sequelize.DataTypes.DATE,
    allowNull: false
  },

  location: {
    type: Sequelize.DataTypes.STRING,
    defaultValue: 'online'
  },

  eventLink: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },

  invitedAttendees: {
    type: Sequelize.DataTypes.INTEGER,
    defaultValue: 0
  }

});



module.exports = Event;