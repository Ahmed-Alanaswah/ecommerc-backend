"use strict";
const express = require("express");
const cors = require("cors");
const { getGameData } = require("./controller/game.controller");
const mongoose = require("mongoose");
const {
	createFavouriteGame,
	getFavouriteGame,
	deleteFavouriteGame,
	updateFavouriteGame,
} = require("./controller/game.crud.controller");
// const superagent = require("superagent");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8081;

//connect to mongoose
mongoose.connect("mongodb://localhost:27017/Games", {
	useNewUrlParser: true,

	useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});

app.get("/game", getGameData);
// crud endpoints

//create favourung an game end point (create/post)
app.post("/game/favourite", createFavouriteGame);
// getting the favourite games end points (read/get)
app.get("/game/favourite", getFavouriteGame);

// deleteing the favourite games end points(delete/DELETE)
app.delete("/game/favourite/:slug", deleteFavouriteGame);

// updating the favourite games end points(update/PUT)
app.put("/game/favourite/:slug", updateFavouriteGame);
