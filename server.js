require("dotenv").config();
const express = require("express");
const login = require("./routes/loginroutes");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow_Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const router = express.Router();

//test route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to our upload module apis" });
});

//route to handle user registration
router.post("/register", login.register);
router.post("/login", login.login);
app.use("/api", router);
app.listen(4000);
