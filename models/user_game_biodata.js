"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user_game, {
        foreignKey: "user_id",
      });
    }
  }
  user_game_biodata.init(
    {
      user_game_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user_games",
          key: "user_id",
        },
        onUpdate: "NO ACTION",
        onDelete: "CASCADE",
      },
      nama: DataTypes.STRING,
      bio: DataTypes.TEXT,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_game_biodata",
    }
  );
  return user_game_biodata;
};
