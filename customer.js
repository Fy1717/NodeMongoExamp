var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: String,
    city: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer

