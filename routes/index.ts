import {Request, Response} from "express";

const express = require('express');
const router = express.Router();


router.get('/', (req: Request, res: Response) => {

    res.render('index', {
        title: 'Express'
    });
});

// module.exports = router;
export default router;