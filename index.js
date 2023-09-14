import express from "express";
import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

import nodemailer from "nodemailer";

const app = express();
const port = 9070;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.post("/send", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "2004natasha13@gmail.com",
      pass: "xsvsfywkomfltozy",
    },
  });

  let result = transporter.sendMail({
    from: "2004natasha13@gmail.com",
    to: "nataliya.bratchykova@gmail.com",
    subject: "EJS site comment",
    text: req.body.name + "\n" + req.body.message,
  });

  // render message that told that it was sended

  res.render("send.ejs");
});

app.listen(port);
