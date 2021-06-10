var express= require("express");
var app= express();
var PORT= process.env.PORT || 3001;
var path= require("path");
var db= require("./models");
require('dotenv').config();

/* Define middleware here */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Serve up static assets (usually on heroku) */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// router.use("/api", apiRoutes);
require("./routes/post-data.js")(app);

/* Add routes, both API and view */
// app.use(apiRoutes);
// app.post("/api/postData", (req, res)=> {
//     console.log("req.body: ", req.body);
//     // console.log(res);
// });

/* If no other routes are hit, send the react app */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/"));
});
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


/* Start the API server */
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// var express = require("express");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
// var db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// // Routes
// // =============================================================
// // require("./routes/html-routes.js")(app);
// // require("./routes/author-api-routes.js")(app);
// // require("./routes/post-api-routes.js")(app);
// require("./routes/post-data.js")(app);

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
