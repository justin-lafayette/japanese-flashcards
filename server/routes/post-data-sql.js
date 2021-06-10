const db= require("../models/index-sql");

module.exports= function(app) {
    // console.log("app post-data.js: ", app);
    // console.log("================================");
    
    // app.get("/api/postData", function(req, res) {
    //     console.log("Req.body: ", req.query);
    //     console.log("================================");
    //     db.Allscore.findAll({
    //         where: {
    //             count: 1
    //         }
    //     })
    //         .then(function(dbAllscore) {
    //             console.log("================================");
    //             console.log(dbAllscore)
    //         })
    // })

    app.post("/api/postData", function(req, res) {
        // console.log("Req.body: ", req);
        // console.log("================================");
        db.Allscore.post(req.body).then( function(dbAllscore) {
            // console.log("dbPost: ", dbAllscore);
            // console.log("================================");
            res.json(dbAllscore);
        });
    });
};