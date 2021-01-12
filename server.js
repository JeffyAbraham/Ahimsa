const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV != "production") require("dotenv").config();
const stripe = require("stripe")('sk_test_51I31soARMitNW1M5G6Gs9XQolguqV06hWyyqTYSNjsWCINXNFwKFsxdYGIttnuwX53Aj13B517Tm7cTdnNo1ZPCv00y9kWDmIu');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json()); //convert response to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use("/static", express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) {
    console.log("SERVER ERROR");
  }
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  console.log(req.body)
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
     console.log(stripeErr)
      res.status(500).send({ error: stripeErr });
      
    } else {
      console.log(stripeRes)
      res.status(200).send({ success: stripeRes });
    }
  });
});
