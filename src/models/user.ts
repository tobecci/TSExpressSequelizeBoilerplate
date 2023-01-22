import { Sequelize, DataType, DataTypes } from "sequelize";

const tableName = "user";

export function user(sequelize: Sequelize) {
  return sequelize.define(tableName, {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    registrationNumber: {
      type: DataTypes.STRING,
      defaultValue: "69",
    },
  });
}
