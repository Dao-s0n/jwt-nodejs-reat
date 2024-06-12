import express from "express";

import configViewengine from "./configs/ViewEngine";
import initWebRoutes from "./routes/web";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

configViewengine(app);

initWebRoutes(app);

app.listen(PORT, () => {
  console.log("port" + PORT);
});
