// Used Express - Node.js web application framework
// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
const express = require('express');
const app = express();



// Got error in API call from client application - Fixed using the solution given in the below link:
// https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked
var cors = require('cors')
app.use(cors())

app.use(express.json());

// Register the routes to perform list, delete and add the dishes
const dishesRoutes = require('./dishesRoutes');
app.use('/dishes', dishesRoutes);

// Used to test whether API is working or not
app.use("/", (res, req) => {
    req.send("API to Manage dishes")
});

// Connects with the available port 3000
app.listen(3000);