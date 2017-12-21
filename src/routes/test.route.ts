import * as express from 'express';
const router: express.Router = express.Router();
import { check, validationResult } from 'express-validator/check';

router.get('/',
    (req: express.Request, res: express.Response) => {
        res.json({
            data: {
                message: 'hello world',
            }
        })
    })

export const testRouter: express.Router = router;