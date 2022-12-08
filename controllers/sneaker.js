////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Sneaker = require("../models/sneaker");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  });

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// index route
router.get("/", (req, res) => {
    Sneaker.find({username: req.session.username}, (err, sneakers) => {
      res.render("sneakers/index.ejs", { sneakers });
    });
  });

//new route
router.get("/new", (req, res) => {
  res.render("sneakers/new.ejs");
});

// create route
router.post("/", (req, res) => {
    // check if the extinct property should be true or false
    req.body.highTop = req.body.highTop === "on" ? true : false;
    // add username to req.body to track related user
    req.body.username = req.session.username
    // create the new animal
    Sneaker.create(req.body, (err, sneaker) => {
      // redirect the user back to the main animals page after animal created
      res.redirect("/sneakers");
    });
  });

// edit route
router.get("/:id/edit", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // get the animal from the database
  Sneaker.findById(id, (err, sneaker) => {
    // render template and send it animal
    res.render("sneakers/edit.ejs", { sneaker });
  });
});

//update route
router.put("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // check if the extinct property should be true or false
  req.body.highTop = req.body.highTop === "on" ? true : false;
  // update the animal
  Sneaker.findByIdAndUpdate(id, req.body, { new: true }, (err, sneaker) => {
    // redirect user back to main page when animal
    res.redirect("/sneakers");
  });
});

router.delete("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the animal
  Sneaker.findByIdAndRemove(id, (err, sneaker) => {
    // redirect user back to index page
    res.redirect("/sneakers");
  });
});

// show route
router.get("/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;

  // find the particular animal from the database
  Sneaker.findById(id, (err, sneaker) => {
    // render the template with the data from the database
    res.render("sneakers/show.ejs", { sneaker });
  });
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;