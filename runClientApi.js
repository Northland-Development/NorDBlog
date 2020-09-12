const concurrently = require('concurrently');
const path = require('path');
const config = require('dotenv').config({path: path.resolve(__dirname,'.env')})
const react_objs = {};
Object.keys(config.parsed).filter(key => !key.includes('DB_')).map(key => {
    react_objs[`REACT_APP_${key}`] = config.parsed[key];
})

concurrently([
    { command: 'npm:runAPI', name: 'Api' , env: { ...config.parsed }},
    { command: 'npm:runClient', name: 'Client', env: { ...react_objs }},
    { command: 'docker-compose up', name: 'DB' }
], {
    prefix: 'name'
}).then();