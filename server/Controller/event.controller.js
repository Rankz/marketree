const db = require ('../db')


exports.createNewEvent = async (req, res) => {
  
  try {
    const { date, location, eventLink } = await req.body;
    const newEvent = await db.Event.create({ date, location, eventLink });
    res.status(201).send(newEvent);
    console.log(newEvent);
    
  } catch (err) {
    res.status(500).send(`unable to add event ${err}`);
    console.log(err);
  }
}