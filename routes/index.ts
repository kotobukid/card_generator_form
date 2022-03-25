import {Request, Response} from "express";

const express = require('express');
const router = express.Router();


router.get('/', (req: Request, res: Response) => {

    res.render('index', {
        title: 'Express'
    });
});

router.post('/generate_image.json', (req: Request, res: Response) => {
    console.log(req.body.source);
    res.json({
        success: true
    });
});

// module.exports = router;
export default router;