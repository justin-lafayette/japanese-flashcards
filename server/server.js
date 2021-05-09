const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");
const { response } = require("express");
require('dotenv').config();
const path = require("path");

// const router = express.Router();
// const fs = require("fs");
// const apiRoutes = require("./routes/api");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Define API routes here

// router.use("/api", apiRoutes);


// Add routes, both API and view
// app.use(apiRoutes);
app.post("/api/sendData", (req, res)=> {
    console.log(req.body);
    // console.log(res);
});

// app.get("/getWord", (req, res) => {
//     axios
//         .get(`http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=${process.env.REACT_APP_API_KEY}`)
//         .then( response => {

//             let word = response.data[0].word;
//             res.send( word );

//         })
//         .catch( ( err ) => {
//             console.log('Error occurred: ', err);
//         });
// })


//if no other routes are hit, send the react app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/"));
});
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
