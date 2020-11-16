const express = require("express");
const path = require("path")
const app = express();
const msg = "Server Running";

app.use("/", express.static(path.resolve(__dirname, "..", "public")));

app.listen(process.env.PORT || 3333, () => console.log(msg));
