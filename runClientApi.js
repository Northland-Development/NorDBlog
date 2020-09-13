const concurrently = require('concurrently');
const path = require('path');
const config = require('dotenv').config({path: path.resolve(__dirname,'.env')})
const react_objs = {};
Object.keys(config.parsed).map(key => {
    react_objs[`REACT_APP_${key}`] = config.parsed[key];
})

concurrently([
    { command: 'npm:runAPI', name: 'Api' , env: { ...config.parsed }},
    { command: 'npm:runClient', name: 'Client', env: { ...react_objs }},
    { command: 'npm:runDB', name: 'DB' }
], {
    prefix: 'name'
}).then();