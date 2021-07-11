const Sequelize = require('sequelize');
require('dotenv').config()
const Event = require ('./Model/event.model');
const User = require ('./Model/user.model');

const PASSWORD = process.env.MYSQL_PASSWORD

const sequelize = new Sequelize('marketree', 'root', PASSWORD, {
  dialect: 'mysql',
  host: 'localhost'
});

  sequelize.authenticate()
  .then (result => console.log('Connection has been established successfully.', result))
  .catch (error => console.error('Unable to connect to the database:', error)) 
  

  const db = {};
  db.Event = Event (sequelize);
  db.User = User (sequelize);
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  const eventModel = db.Event;
  const userModel = db.User;

  userModel.belongsTo(userModel, {
    as: 'parent_id'
  });


module.exports = db;