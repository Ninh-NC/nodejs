import express from "express";
import * as path from "path";
const configEngine = (app) => {
  app.set("views", path.join("./app", "Views"));
  app.set("view engine", "ejs");
  // cofig static fille
  app.use(express.static(path.join("./app", "public")));
};
export default configEngine;
