const express = require('express');
const router = express.Router();
const { createNewEvent } = require('./Controller/event.controller');
const { createNewUser } = require('./Controller/user.controller')

router.post('/event', createNewEvent);


router.post('/user', createNewUser);



module.exports = router;