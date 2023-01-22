import { Express } from "express";
import { modelList } from "../models";

export default function init(app: Express, models: modelList) {
  app.post("/user", function (req, res) {
    console.log({ msg: "creating user" });
    const { user } = models;
    user.create({});
    res.json({ msg: "hello world" });
  });
}
