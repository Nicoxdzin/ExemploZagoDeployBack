const mongoose = require('mongoose');
const config = require('config')

module.exports = function () {
    const db = process.env.DB_URL;
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`connected to ${db}`));
}