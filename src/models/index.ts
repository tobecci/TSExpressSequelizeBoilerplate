import { Model, ModelStatic, Sequelize } from "sequelize";
import { user } from "./user";

type model = ModelStatic<Model<any, any>>;

export interface modelList {
  user: model;
}

export function getModels(sequelize: Sequelize): modelList {
  return {
    user: user(sequelize),
  };
}

export async function initModels(sequelize: Sequelize): Promise<modelList> {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfull");
    const models = getModels(sequelize);
    console.log({ models });
    await sequelize.sync({ alter: true });
    return models;
  } catch (error) {
    throw new Error("could not connect to database");
  }
}
