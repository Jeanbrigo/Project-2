// import the things
require("dotenv").config()
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const SneakerRouter = require("./controllers/sneaker");
const UserRouter = require("./controllers/user");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const PORT = process.env.PORT || 3000;

// Create Express app
const app = express()

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("dev")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically
app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
  saveUninitialized: true,
  resave: false,
}))
app.use("/sneakers", SneakerRouter)
app.use("/user", UserRouter)

// Routes and routers
app.get("/", (req,res)=>{
    res.render("index.ejs")
})

// Start the server (listener)
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})