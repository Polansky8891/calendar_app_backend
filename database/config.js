const mongoose = require('mongoose');


const dbConnection = async () => {
 
    try {
 
        mongoose.set('strictQuery', true);

        await mongoose.connect( process.env.DB_CNN || '' );
 
        console.log( 'Database online' );
 
    } catch ( err ) {
        console.log( err );
        throw new Error( 'Error connecting to the DB' );
    }
 
};
 
module.exports = {
    dbConnection
};