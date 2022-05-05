'use strict';

import Config from require("./config")

const fs = require('fs');
const dataPath = "../public/data/"

const infoSheetId = "INFO"
const captionSheetId = "CAPTIONS"

const showInfoUrl = ""

let rawdata = fs.readFileSync(dataPath + 'shows.json')
let showsArr = JSON.parse(rawdata)

console.log("config", Config)

showsArr.map(show => {
    console.log(show.id)
})