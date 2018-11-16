// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    // The email cannot be null, and must be a proper email before creation
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    }
  });
  return Book;
};  


