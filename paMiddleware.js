const express = require("express");
const app = express();
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(checkCart);
app.use(totalPrice);

app.get("/checkout", Validatecustomer, (req, res) => {
  console.log("inside checkout route");
  console.log(req.body);
  res.send("successfull checkout your total amount: " + req.body.price);
});

app.get("/checkout2", (req, res) => {
  console.log(req.body);
  res.send("successfull checkout your total amount: " + req.body);
});
function Validatecustomer(req, res, next) {
  if (req.query.customer === "true") {
    console.log("You are a Customer !");
    next();
  } else throw "error";
}

function checkCart(req, res, next) {
  const { Cart } = req.body;
  console.log("inside checkcart");

  console.log(Cart);
  if (Cart) {
    next();
  } else {
    throw "Empty cart";
  }
}
function totalPrice(req, res, next) {
  console.log("inside total price");
  console.log(req.body);
  console.log("total price: 500");
  req.body.price = "500";

  next();
}
app.listen(3000, () => console.log("Server Started"));
