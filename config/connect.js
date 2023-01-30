require('dotenv').config();
const mongose = require('mongoose');

async function connect(){
    await mongoose.connect(process.env.DB);
    console.log('data base connected');
}

module.exports = connect;