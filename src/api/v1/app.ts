import cors from "cors";
import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";

import routes from "./routes";

const app: Application = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

export default app;