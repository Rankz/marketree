const db = require ('../db')
const nodemailer = require("nodemailer");
require('dotenv').config();




const recursiveFind =  async (user) => {
  try {
    user.children = [...JSON.parse(user.children)];
    if (user.children.length) {
      const allChildren = await Promise.all(user.children.map(async child => {
        const member = await db.User.findByPk(child);
        
        return await recursiveFind(member.dataValues)
      }))

      return {...user, children: allChildren}
    }
    return user;
  } catch (err) {
    console.log(err)
  }
}

exports.sendEmailInvite = async (req, res) => {

  const { recipientEmail, firstName, lastName } = await req.body;
  const {id} = await req.params;
  const fullName = `${firstName} ${lastName}`

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
      user: 'marketreeapp@gmail.com',
      pass: 'gabriel0208'
    }
  });
  
  const mailOptions = {
    from: 'hello@marketree.co.uk',
    to: recipientEmail,
    subject: 'Thought this might be of interest',
    html: `<p style='font-size: 18px'>You have been invited to attend an event to start your very own beauty business, by ${fullName}. Click the link below: <B></B>http://localhost:3001/event-page/${id}</p>`

  }

  transporter.sendMail(mailOptions, (err, data) => {
    if(err) {
      console.log('error occured', err)
    } else {
      res.send('Email has been sent')
    }
  })

}

exports.createNewUser = async (req, res) => {
  
  try {
    const newUser = await db.User.create(req.body);
    const {parent_id} = req.params;
    if(parent_id) {
      const parent = await db.User.findByPk(parent_id);
      await newUser.setParent_id(parent);
      const childrenArray = [...JSON.parse(parent.dataValues.children), newUser.dataValues.id];
      await db.User.update({children:JSON.stringify(childrenArray)}, {where: {
        id:parent_id
      }})
    }
    
    res.status(201).send(newUser);

  } catch (err) {
    res.status(500).send(`unable to add event ${err}`)
    console.log(err);
  }
}

exports.findSingleUser = async (req, res) => {
  try {
    const {id} = await req.body;
    const singleUser = await db.User.findOne({
      where: {id}, 
      include:[ {
        model: db.User,
        as: 'parent_id'
      }]
    })

    if(!singleUser) {
      res.status(204).send('unable to find this userProfile');
    } else {
      res.status(200).send(singleUser.dataValues)
    }

  } catch (err) {
    res.status(500).send(`unable to find userProfile ${err}`);
    console.log(err);
  }
}

exports.findUserTree= async (req, res) => {
  try {
    const { id } = req.params;

    const user = await db.User.findOne({
      where: {id}, 
      include:[ {
        model: db.User,
        as: 'parent_id'
      }]
    })

    const tree = await recursiveFind(user.dataValues)

    if(!tree) {
      res.status(204).send('unable to find this userProfile');
    } else {
      res.status(200).send(tree)
    } 
  } catch (err) {
    res.status(500).send(`unable to find userProfile ${err}`);
    console.log(err);
  }
}

exports.updateUserProfile = async (req, res) => {

  try {
    const { profilePicture, id } = await req.body;
    const userProfile =  await db.User.findByPk(id);
    if(!userProfile) {
      res.status(204).send('unable to find this userProfile');
    } else {

      userProfile.profilePicture= profilePicture;
      await userProfile.save();
      res.status(200).send(userProfile)
    } 
  } catch (err) {
    res.status(500).send(`unable to update userProfile ${err}`);
    console.log(err);
  }

}

exports.updateUserStatus = async (req, res) => {
  
  try {
    const { status } = await req.body;
    const { id } = req.body;
    const userProfile =  await db.User.findByPk(id);
    if(!userProfile) {
      res.status(204).send('unable to find this user profile');
    } else {
      userProfile.status = status;
      await userProfile.save();
      res.status(200).send(userProfile)
    }

  } catch (err) {
    res.status(500).send(`unable to update user status ${err}`);
    console.log(err);
  }
  
}

exports.updateAffiliateLink = async (req, res) => {
  
  try {
    const { affiliateLink, id} = await req.body;
    const userProfile =  await db.User.findByPk(id);
    
    if(!userProfile) {
      res.status(204).send('unable to find this user profile');
    } else {
      userProfile.affiliateLink = affiliateLink;
      await userProfile.save();
      res.status(200).send(userProfile)
    }

  } catch (err) {
    res.status(500).send(`unable to update user affiliate link ${err}`);
    console.log(err);
  }
}