// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    // The email cannot be null, and must be a proper email before creation
    story: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    perfectDays: {
      type: DataTypes.INTEGER,
    },
    certainty: {
      type: DataTypes.INTEGER,
    },
    noise: {
      type: DataTypes.INTEGER,
    },
    icebox: {
      type: DataTypes.BOOLEAN,
    }
  });
  return Story;
};  


