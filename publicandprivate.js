const express = require("express");
const app = express();
//public
app.get("/login", (req, res) => {
  console.log("log in please");
  res.send("Users Page");
});

// app.get('/login', (req, res,next) => {
//     next()
//   })

app.use(loggingMiddleware);
//private
app.get("/profile", (req, res) => {
  console.log("Welcome to your profile");
  res.send("Profile Page");
});

function loggingMiddleware(req, res, next) {
  console.log("Inside Middleware");
  next();
}

app.listen(3000, () => console.log("Server Started"));
