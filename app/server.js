import express from "express";

import configEngine from "./Config/viewEngine.js";
import "dotenv/config";
const app = express();
import router from "./Routes/web.js";
const port = process.env.PORT ?? 3000;

// cofig viewEngine
configEngine(app);

app.use("/", router);
app.use("/about", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
