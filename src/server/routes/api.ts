import * as express from 'express';

module.exports = (APP_CONFIG) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        return res.status(200).send('Welcome to the API!');
    });


    return router;
};
