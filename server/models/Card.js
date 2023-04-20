// create scheme for indiv. flashcards
// Users > Decks > Cards

import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
  {
    deckId: {
      type: String,
      required: true,
    },
    cardId: {
      type: String,
      required: true,
    },
    front: {
      type: String,
      required: true,
    },
    back: {
      type: String,
      required: true,
    },
    status: {
      type: Number, // 1- Green, 2- Yellow, 3- Red
      required: true, // need to create useState function to default card to unreviewed
    },
    frontPicturePath: String,
    backPicturePath: String,
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

export default Card;
