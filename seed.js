const fs = require('fs');

const data = require('./db.json'); // datos ya definidos arriba

fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
console.log('Base de datos restaurada con datos de ejemplo.');
