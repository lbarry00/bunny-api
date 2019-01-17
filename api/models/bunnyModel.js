'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	img: {
		type: String,
		required: "Please enter a link to an image"
	}
}, { versionKey: false });

module.exports = mongoose.model("Images", schema);
