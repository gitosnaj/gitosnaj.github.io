

const {MongoClient} = require ('mongodb')


let dbConnection


module.exports = {
  connectToDb: (cb) => {
  MongoClient.connect( "mongodb://localhost:27017/developers")
  .then((client) => {
    dbConnection = client.db('developers');
    return cb();
  })
  .then(() => {
    console.log('Connected to database');
  })  

  .catch (err => {
    console.log(err);
    return cb(err);


  }),

  
  getDb: () => dbConnection

}}
