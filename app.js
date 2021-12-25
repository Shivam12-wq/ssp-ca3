const express = require('express');
const app = express();

app.use(express.json());

app.use("/", (res, req) => {
    req.send("API to Manage dishes")
});

var  port = process.env.PORT || 3000;
app.listen(port);