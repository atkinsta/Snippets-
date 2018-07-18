// Create comments
// comment text

module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        user: {
            type: DataTypes.STRING
        }
    });

    Comment.associate = function(models) {
        Comment.belongsTo(models.Snippet, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
};