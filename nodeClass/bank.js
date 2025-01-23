const express = require("express");
const app = express();

// Middleware to check bank account status
function bankAccount(req, res, next) {
  const money = Number(req.query.money); // Convert query parameter to a number

  if (money > 0 && money <= 10000) {
    res.json({
      msg: "You are a kiddo",
    });
  } else if (money >= 10000) {
    res.json({
      msg: "You are a rich guy",
    });
  
  }
}

// Apply middleware only to /bank1 route
app.get("/bank1", bankAccount, (req, res) => {
  res.json({
    msg: "Hello, chacha!",
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
