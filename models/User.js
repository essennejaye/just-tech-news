const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and configuration
User.init(
{
    // TABLE COLUMN DEFINITIONS
    // id column
    id: {
        // use Sequelize DataTypes object
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // username column
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // if allowNull is set to false, can validate through valiadator before table creation
        validate: {
            isEmail: true
        }
    },
    // password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // specify password length
            len: [4]
        }
    }
},

{
    // TABLE CONFIGURATION OPTIONS

     // pass in our imported sequelize connection (the direct connection to our database)
     sequelize,
     // don't automatically create createdAt/updatedAt timestamp fields
     timestamps: false,
     // don't pluralize name of database table
     freezeTableName: true,
     // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
     underscored: true,
     // make it so our model name stays lowercase in the database
     modelName: 'user'
}
);

module.exports = User;