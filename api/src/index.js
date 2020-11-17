const express = require("express");
const cors = require("cors");
const app = express();
const msg = { msg: "API Running" };

app.use(cors());
app.get("/", (_, res) => res.json(msg));

app.listen(process.env.PORT || 3333, () => console.log(msg));

//
