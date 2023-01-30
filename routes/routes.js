const { Router } = require("express");
const User = require("../models/User.Schema");

const jwt = require("jsonwebtoken");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("routes");
});


//register
routes.post("/users/register", async (req, res) => {
  try {
    let email = req.body.email;

    if (await User.findOne({ email: { $eq: email } })) {
      return res.send("user alardy exists ");
    } else {
      let data = await User.create(req.body);
      res.status(200).send(data);
    }
  } catch (error) {
    // console.log(error);
    res.status(500).send("error occured");
  }

});




// login

routes.post("/users/login", async (req, res) => {
  try {
    let { email } = req.body;

    let temp = await User.find({ email: { $eq: email } });

    if (temp) {
      let token = jwt.sign({ email: email }, "secretkey");
      res.send(token);
    } else {
      res.status(500).send("use is not there");
    }
  } catch (error) {
    res.status(500).send("error");
  }
});

module.exports = routes;
