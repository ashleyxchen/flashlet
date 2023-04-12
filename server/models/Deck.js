// create data schema for deck of flashcards
// Users > Decks > Cards

import mongoose from "mongoose";

const deckSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    deckId: {
      type: String,
      required: true,
    },
    description: String,
    picturePath: String,
    userPicturePath: String,
  },
  { timestamps: true }
);

const Deck = mongoose.model("Deck", deckSchema);

export default Deck;
