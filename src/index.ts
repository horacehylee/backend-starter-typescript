declare var __DEV__: boolean;

import * as errorHandler from "api-error-handler";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as morgan from "morgan";

import { setupRoutes } from "./routes";
import { setupDb } from "./setup";

import { config } from "dotenv";
config();

const port = +process.env.PORT || 3000;
const app: express.Express = express();

app.use(bodyParser.json());
app.use(compression());
app.use(cors({ origin: true }));
app.use(morgan("combined"));

const log = console.log;
const logError = console.error;

const server = app.listen(port, (err: Error) => {
  if (err) {
    logError(err);
    return;
  }
  if (__DEV__) {
    log("> in development");
  }
  log(`> listening on port ${port}`);

  setupDb();
});

setupRoutes(app);

app.use(errorHandler());

export = app;
