const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app =  express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Compiled successfully. App is running on port ${PORT}`))