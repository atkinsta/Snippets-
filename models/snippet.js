// Create Posts Table
// title, language, code, description...

module.exports = function (sequelize, DataTypes) {
    var Snippet = sequelize.define("Snippet", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                max: 50
            }
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                max: 15
            }
        },
        codeBlock: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: true,
                max: 500
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        }
    });


    // add associations

    return Post;
};