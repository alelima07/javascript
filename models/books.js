// Alessandra Lima
// Course: IT122  (Week 4 - Database Integration)
// Desc: create a data model that: connects to your database,
//   defines a data schema, and exports your data model for use by other scripts,

const mongoose = require('mongoose');
const credentials = require("../models/credentials")

// remote db connection settings. For security, connectionString should be in a separate file not committed to git

mongoose.connect(credentials.connectionString, { dbName: 'sccprojects', useNewUrlParser: true, useUnifiedTopology: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});
 
// define books model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
 books: { type: String, required: true },
 title: String,
 author: String,
 year: String,
 ranking: String
}); 

module.exports = mongoose.model('books', mySchema);