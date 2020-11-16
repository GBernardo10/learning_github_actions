const express = require("express");
const app = express();
const msg = "API Running";

app.get("/", (req, res) => res.json(msg));

app.listen(process.env.PORT || 3333, () => console.log(msg));

// WEBSITE_NODE_DEFAULT_VERSION