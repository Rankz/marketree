const Sequelize = require('sequelize');

const Event = require ('./Model/event.model');
const User = require ('./Model/user.model');

const sequelize = new Sequelize('marketree', 'root', 'gabriel0208', {
  dialect: 'mysql',
  host: 'localhost'
});

// const connection = mysql.createConnection({ host:'localhost', port:3306, user, password })

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

  // userModel.hasMany(userModel, {
  //   as: 'children',
  //   foreignKey: {defaultValue: 0,
  //   name:'children_id'
  //   },
    
  // })




  const dummyData = [
    {
      "id": 1,
      "firstName": "joe",
      "lastName": "Smith",
      "email": "joesmith@gmail.com",
      "password": "mattsmith123",
      "aboutMe": null,
      "profilePicture": null,
      "status": "harvest",
      "affiliateLink": "",
      "createdAt": "2021-06-11T10:01:41.000Z",
      "updatedAt": "2021-06-11T10:07:10.000Z",
      "parentIdId": null,
      "userId": 2
    },
    {
        "id": 2,
        "firstName": "Ellie",
        "lastName": "Smith",
        "email": "elliesmith@gmail.com",
        "password": "ellieSmith123",
        "aboutMe": null,
        "profilePicture": null,
        "status": "harvest",
        "affiliateLink": "",
        "createdAt": "2021-06-11T10:03:18.000Z",
        "updatedAt": "2021-06-11T12:08:27.000Z",
        "parentIdId": 1,
        "userId": 4
    },
    {
        "id": 3,
        "firstName": "David",
        "lastName": "Smith",
        "email": "Davidsmith@gmail.com",
        "password": "Davidsmith123",
        "aboutMe": null,
        "profilePicture": null,
        "status": "harvest",
        "affiliateLink": "",
        "createdAt": "2021-06-11T10:04:43.000Z",
        "updatedAt": "2021-06-11T10:04:43.000Z",
        "parentIdId": 1,
        "userId": null
    },
    {
        "id": 4,
        "firstName": "Josh",
        "lastName": "Mills",
        "email": "joshmills@gmail.com",
        "password": "joshmills123",
        "aboutMe": null,
        "profilePicture": null,
        "status": "harvest",
        "affiliateLink": "",
        "createdAt": "2021-06-11T12:07:37.000Z",
        "updatedAt": "2021-06-11T12:10:02.000Z",
        "parentIdId": 2,
        "userId": 5
    },
    {
        "id": 5,
        "firstName": "Dan",
        "lastName": "Mills",
        "email": "danmills@gmail.com",
        "password": "Danmills123",
        "aboutMe": null,
        "profilePicture": null,
        "status": "harvest",
        "affiliateLink": "",
        "createdAt": "2021-06-11T12:09:29.000Z",
        "updatedAt": "2021-06-11T12:09:29.000Z",
        "parentIdId": 4,
        "userId": null
    }
  ];


module.exports = db;