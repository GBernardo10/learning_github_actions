const express = require("express");
const app = express();
const msg = "API Running";

app.get("/", (_, res) => res.json(msg));

app.listen(process.env.PORT || 3333, () => console.log(msg));

// 
