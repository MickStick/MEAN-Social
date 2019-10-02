require('dotenv').config()
module.exports = {
    //url: 'mongodb://localhost:27017/mean-tut',
    url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}`, 
    db: `${process.env.DB_SERVER}/${process.env.DB_NAME}`,
    secret: process.env.SECRET
};