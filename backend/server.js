import express, { urlencoded, json } from "express";
const app = express();
import { connection } from "mongoose";
import passport, { initialize, session as _session } from "passport";
import session from "express-session";
const MongoStore = require("connect-mongo")(session);
import flash from "express-flash";
import logger from "morgan";
import connectDB from "./config/database";
import mainRoutes from "./routes/main";
import cors from 'cors';
import cookieParser from 'cookie-parser';
//const tweetRoutes = require("./routes/tweet");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config

//Connect To Database
connectDB();



//Body Parsing
app.use(urlencoded({ extended: true }));
app.use(json());

//Logging
app.use(logger("dev"));

// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: connection }),
    })
  );
  app.use(cookieParser("keyboard cat"))
  // Passport middleware
  app.use(initialize());
  app.use(_session());
  require("./config/passport")(passport);
  //Use flash messages for errors, info, ect...
  app.use(flash());


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
  
  //Setup Routes For Which The Server Is Listening
   app.use("/", mainRoutes);
   //app.use("/tweet", tweetRoutes);
// app.post('/login', passport.authenticate('local'), (req, res) => {
//   res.send(req.user);
// });
  //Server Running
  app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });