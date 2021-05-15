#!/usr/bin/env node
import path from 'path';
const express = require('express')
const app = express()
app.use("/public", express.static(path.join(__dirname, '../public')));

const port = 3000

import indexRouter from '../routes';

app.set('view engine', 'pug');

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
