//@ts-check

import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  let html = "<h1>hello from express</h1>";
  html += `<a href='/oauth2/sign_out?rd=https://${req.headers["x-forwarded-host"]}'>Logout</a> | <a href='/oauth2/userinfo'>userinfo</a><br/><br/>\n`;
  html += `<li>Logged in as ${req.headers["x-user"]}</li>\n`;
  html += `<li>Email: ${req.headers["x-email"]}</li>\n`;
  html += `<li>Real IP: ${req.headers["x-real-ip"]}</li>\n`;
  //html += `<br/><br/>${JSON.stringify(req.headers)}`;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
