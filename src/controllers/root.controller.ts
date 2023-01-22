import { Express } from "express";
import { modelList } from "../models";

export default function init(app: Express, models: modelList) {
  app.get("/", function (req, res) {
    res.end("hello world oh");
  });
}
