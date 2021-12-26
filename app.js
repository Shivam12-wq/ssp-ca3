const express = require('express');
const app = express();

const dishesRoutes = require('./dishesRoutes');

app.use(express.json());

app.use('/dishes', dishesRoutes);

app.use("/", (res, req) => {
    req.send("API to Manage dishes")
});

var  port = process.env.PORT || 3000;
app.listen(port);