const express = require("express");
const app = express();
function oldEnough(age) {
  if (age > 14) {
    return true;
  } else {
    return false;
  }
}
function counting(count) {
  let sum = 0;
  for (var i = 0; i < count.length; i++) {
    sum += i;
  }
  
}
function isOldEnoughMiddleWare(req, res, next) {
  const age = req.query.age;
  if (age > 14 && age <= 50) {
    res.json({
      msg: "Enjoy your ride baby boy and girl",
    });
  } else if (age > 50) {
    res.json("chacha upar jana hai kia!");
  } else {
    res.json({
      msg: "you are not eligible for this ride",
    });
  }
}
app.use(isOldEnoughMiddleWare);
app.get("/ride1", isOldEnoughMiddleWare, (req, res) => {
  res.json({
    msg: "Enjoy the Ride baby boys and girls",
  });
});

app.get("/ride2", isOldEnoughMiddleWare, (req, res) => {
  res.json({
    msg: "Enjoy",
  });
});
app.get("/", (req, res) => {
  res.send("your login is successfull ");
});
app.listen(3000);
