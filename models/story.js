// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    // The email cannot be null, and must be a proper email before creation
    project: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    perfectDays: {
      type: DataTypes.DECIMAL(10, 2),
    },
    certainty: {
      type: DataTypes.DECIMAL(10, 2),
    },
    noise: {
      type: DataTypes.DECIMAL(10, 2),
    },
    icebox: {
      type: DataTypes.BOOLEAN,
    },
    status: {
      type: DataTypes.STRING
    },
    min: {
      type: DataTypes.DECIMAL(10, 2),
    },
    max: {
      type: DataTypes.DECIMAL(10, 2),
    },
  });
  return Story;
};


