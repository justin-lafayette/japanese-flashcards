var express= require("express");
var app= express();
var PORT= process.env.PORT || 3001;
var path= require("path");
// var db= require("./models");
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

/* If no other routes are hit, send the react app */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/"));
});


/* Start the API server */
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});