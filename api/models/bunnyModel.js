'use strict';
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
	img: {
		type: String,
		required: true,
		unique: true
	}
}, { versionKey: false });

schema.plugin(uniqueValidator);

module.exports = mongoose.model("Images", schema);
