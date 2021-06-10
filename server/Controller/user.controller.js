const db = require ('../db')


exports.createNewUser = async (req, res) => {

  try {
    const {firstName, lastName, email, password} = await req.body;
    const newUser = await db.User.create({ firstName, lastName, email, password });
    res.status(201).send(newUser);

  } catch (err) {
    res.status(500).send(`unable to add event ${err}`)
    console.log(err);
  }
}

exports.updateUserProfile = (req, res) => {
  const aboutMe = req.body.aboutMe;
  const profilePicture = req.body.profilePicture;
}

exports.updateUserStatus = (req, res) => {
  const status = req.body.status;
}

exports.updateAffiliateLink = (req, res) => {
  const affiliateLink = req.body.affiliateLink;
}