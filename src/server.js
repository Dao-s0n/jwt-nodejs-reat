import express from "express";

import configViewengine from "./config/ViewEngine";
import initWebRoutes from "./routes/web";

require("dotenv").config();
import bodyParser from "body-parser";
import connection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 3000;

configViewengine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection();

initWebRoutes(app);

app.listen(PORT, () => {
  console.log("port" + PORT);
});
