const db = require ('../db')


const recursiveFind =  async (user) => {
  try {
    user.children = [...JSON.parse(user.children)];
    if (user.children.length) {
      const allChildren = await Promise.all(user.children.map(async child => {
        const member = await db.User.findByPk(child);
        
        return await recursiveFind(member.dataValues)
      }))
      
      console.log('allChildren', allChildren);
      return {...user, children: allChildren}
    }
    return user;
  } catch (err) {
    console.log(err)
  }

}


exports.createNewUser = async (req, res) => {

  try {
    const {firstName, lastName, email, password} = await req.body;
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

exports.findUser= async (req, res) => {
  try {
    const { id } = req.body;

    // get the parent
    // grab the interested user
    // itterate through children
    // for each child reccursively get their children and keep going until no more children to grab

    const user = await db.User.findOne({
      where: {id}, 
      include:[ {
        model: db.User,
        as: 'parent_id'
      }]
    })
    console.log(user)
    const tree = await recursiveFind(user.dataValues)


    // const userProfile = await db.User.findAll({
    //   include:[ {
    //     model: db.User,
    //     as: 'parent_id'
    //   }, {
    //     model: db.User, 
    //     as: 'children_id'
    //   }],
    //   where: {
    //     id: id
    //   }
    // });
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
    const { aboutMe, profilePicture, userId } = await req.body;
    const { id } = req.body;
    const userProfile =  await db.User.findByPk(id);
    if(!userProfile) {
      res.status(204).send('unable to find this userProfile');
    } else {
      // userProfile.aboutMe = aboutMe;
      // userProfile.profilePicture = profilePicture;
      userProfile.userId = userId;
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
    const { affiliateLink } = await req.body;
    const { id } = req.body;
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