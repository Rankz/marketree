const express =  require('express');
const app = express ();
const cors = require('cors');
const router = require ('./router');
const db = require ('./db')

const port = 3000;



app.use(cors());
app.use(express.json());
app.use(router);


db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
.then( sql => {
  db.sequelize.sync()
.then(result => {
  app.listen(port, ()=> {
    console.log(`connected at server http://localhost:${port}`);
  });
})
.catch(err => {
    console.log(err);
  })
})

  
  

