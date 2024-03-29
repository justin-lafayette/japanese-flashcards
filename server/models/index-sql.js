"use strict";

var fs= require("fs");
var path= require("path");
var Sequelize= require("sequelize");
var basename= path.basename(module.filename);
var env= "development";
var config= require(__dirname + "/../config/config.json")[env];
var db= {};

// console.log("Config: ", config);
// console.log("=========================================================");

if (config.use_env_variable) {
  var sequelize= new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize= new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
}
// console.log("sequelize: ", sequelize);
// console.log("=========================================================");

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    .forEach(function(file) {
        /* Solution for below model:
            https://stackoverflow.com/questions/62917111/sequelize-import-is-not-a-function
        */
        var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name]= model;
        console.log("model: ", model);
        console.log("=========================================================");
        console.log("db: ", db);
        console.log("=========================================================");
        console.log("db: ", db.AllScore);
        console.log("=========================================================");
    });

Object.keys(db).forEach(function(modelName) {
    console.log("db[modelName]: ", db[modelName]);
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize= sequelize;
db.Sequelize= Sequelize;

module.exports= db;