import * as express from 'express';

import { testRouter } from './routes/test.route';

export const setupRoutes = (app: express.Express) => {
    // app.use('/api/endpoint', endpointRouter);
    app.use('/api/test', testRouter);
}