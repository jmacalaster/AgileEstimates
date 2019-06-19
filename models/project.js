// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    // The email cannot be null, and must be a proper email before creation
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.STRING,
    }
  });
  return Project;
};


