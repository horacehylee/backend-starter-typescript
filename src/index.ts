declare var __DEV__: boolean;

import * as cors from "cors";
import * as express from "express";
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as errorHandler from "api-error-handler";

import { setupRoutes } from "./routes";
import { setupDb } from './setup';

require('dotenv').config()

const port = +process.env.PORT || 3000;
const app: express.Express = express();

app.use(bodyParser.json())
app.use(compression());
app.use(cors({ origin: true }));
app.use(morgan('combined'))

const server = app.listen(port, (err: Error) => {
    if (err) {
        console.error(err)
        return;
    }
    if (__DEV__) {
        console.log('> in development')
    }
    console.log(`> listening on port ${port}`);
    
    setupDb();
});

setupRoutes(app);

app.use(errorHandler());

export = app;