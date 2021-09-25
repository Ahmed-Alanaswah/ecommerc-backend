"use strict";

const mongoose = require("mongoose");

//create scheme
const gameSchema = mongoose.Schema({
	title: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},
	salePrice: String,
	normalPrice: String,
	tdealRatingitl: String,
	thumb: String,
});

// model our schema
const gamePiecModel = mongoose.model("Games", gameSchema);
// export our model

module.exports = gamePiecModel;
