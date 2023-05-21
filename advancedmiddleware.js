//https://blog.webdevsimplified.com/2019-12/express-middleware-in-depth/

const express = require("express");
const app = express();

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

// we can add it to our users page route now
//  in order to ensure that our middleware is only being executed on the users page route.
app.get("/users", authorizeUsersAccess, (req, res) => {
  console.log("hi from / users");
  console.log(req.body);
  res.send("Users Page");
});

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
  next();
}

function authorizeUsersAccess(req, res, next) {
  console.log("authorizeUsersAccess Middleware");
  if (req.query.admin === "true") {
    //users?admin=true
    req.body={};
    req.body.admin = true;
    console.log(req.body);
    next();
  } else res.send("not an admin");
}

//Calling next Is Not The Same As Calling return
function authorizeUsersAccess2(req, res, next) {
  console.log("authorizeUsersAccess Middleware");
  if (req.query.admin === "true") {
    console.log("you are admin");
    req.auth = "true";
    next();
    // return
  }
  console.log("here");
}

app.get("/profile", middleware, (req, res) => {
  console.log("Inside Profile Page");
  res.send("Profile Page");
});

//Calling next Is Not The Same As Calling return
function middleware(req, res, next) {
  console.log("Before Next");
  next();

  console.log("After Next");
}
function middleware2(req, res, next) {
  console.log("Before Next1");
  next();

  console.log("After Next2");
}

app.listen(3000, () => console.log("Server Started"));
