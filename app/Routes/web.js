import express from "express";
const router = express.Router();

import { getAbout } from "../Controllers/aboutControlller.js";
router.get("/about", getAbout);
router.get("/", (req, res) => {
  res.render("sample");
});
export default router;
