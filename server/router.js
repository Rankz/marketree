const express = require('express');
const router = express.Router();
const { createNewEvent } = require('./Controller/event.controller');
const { createNewUser, updateUserProfile, updateUserStatus, updateAffiliateLink, findUserTree, sendEmailInvite, findSingleUser } = require('./Controller/user.controller')

router.post('/event', createNewEvent);
router.get('/userTree/:id', findUserTree);
router.get('/user', findSingleUser);
router.post('/email/:id', sendEmailInvite)
router.post('/user/:parent_id', createNewUser);
router.put('/userProfile', updateUserProfile);
router.put('/userStatus', updateUserStatus);
router.put('/userAffiliateLink', updateAffiliateLink);

module.exports = router;