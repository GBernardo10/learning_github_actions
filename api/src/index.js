const express = require("express");
const cors = require("cors");
const app = express();
const version = require("../package.json").version;
const msg = { msg: "API Running", version };

app.use(cors());
app.get("/", (_, res) => res.json(msg));

app.listen(process.env.PORT || 3333, () => console.log(msg));

//
