I. Implement these three middleware functions:
1. checkCart:that checks ifthecart in thebody isempty or not and incase of empty cart it should throw "Emptycart"
2. totalPrice:that print in console "totalprice:500" and
sends through therequest body new key which is price with value :500
3. Validatecustomer: that checks if the customer is authenticated through the request query otherwise it throws an error "NotAuthorized"
II. implement get function where the path is called "/checkout" and takes the 3rd middleware as an argument and sends the request body as a response

`Note`that checkCart must be executed before toralPrice.
Use Express server and make your app listen on port 3000