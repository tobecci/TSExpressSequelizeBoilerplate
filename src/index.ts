import express, { Express } from "express";
import { initControllers } from "./controllers";
import { resolve } from "path";
import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { initModels } from "./models/index";

const app = express();

async function initializeServer(app: Express) {
  const envConfig = {
    development: resolve(__dirname, "../", ".env.development"),
    production: resolve(__dirname, "../", ".env.production"),
  };
  dotenv.config({ path: envConfig[process.env.NODE_ENV] });

  //connect sequelize
  const sequelize = new Sequelize({
    dialect: "postgres",
    database: process.env.POSTGRES_DATABASE_NAME,
    host: process.env.POSTGRE_HOST,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRES_USERNAME,
    logging: function () {
      return process.env.NODE_ENV === "development" ? true : false;
    },
  });

  const models = await initModels(sequelize);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  initControllers(app, models);
}

initializeServer(app);

//start server
const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`app served on http://localhost:${port}`);
});
