const express = require('express');
const mysql = require('mysql');
const path = require('path');

// viewed at http://localhost:8080
const app = express();
app.use(express.static("public"));

app.listen(8080);