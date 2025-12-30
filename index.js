//@ts-check

import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  let html = "<h1>hello from express</h1>";
  html += `<a href='/oauth2/sign_out'>Logout</a> | <a href='/oauth2/userinfo'>userinfo</a><br/><br/>\n`;
  html += `<li>Logged in as ${req.headers["x-forwarded-user"]}</li>\n`;
  html += `<li>Email: ${req.headers["x-forwarded-email"]}</li>\n`;
  html += `<li>Real IP: ${req.headers["x-real-ip"]}</li>\n`;
  // html += `<br/><br/>${JSON.stringify(req.headers)}`;
  html +=
    "<br/><br/><a href='https://github.com/betagouv/oauth2-deploy-demo'>Demo repo</a>";
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
