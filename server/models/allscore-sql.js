// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory');

module.exports= (sequelize, DataTypes)=> {
    // console.log("================================");
    // console.log(sequelize);
    // console.log("================================");
    // console.log(DataTypes);
    // console.log("================================");
    var Allscore= sequelize.define("Allscores", {
        userID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        calcScore: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        totalQuests: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Allscore;
};
