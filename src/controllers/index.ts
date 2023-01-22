import { Express } from "express";
import rootController from "./root.controller";
import userController from "./user.controller";
import { modelList } from "../models";

export function initControllers(app: Express, models: modelList) {
  const controllers = [rootController, userController];
  controllers.forEach((controller) => {
    controller(app, models);
  });
}
