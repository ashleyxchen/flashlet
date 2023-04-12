// mimic posts.js to CRUD functions of cards.
// decks > cards

import User from "../models/User.js";
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";

/* CREATE */
export const createCard = async (req, res) => {
  try {
    const {
      deckId,
      cardId,
      front,
      back,
      frontPicturePath,
      backPicturePath,
      status,
    } = req.body;
    const deck = await Deck.findById(deckId);
    const newCard = new Card({
      deckId,
      cardId,
      front,
      back,
      frontPicturePath,
      backPicturePath,
      status,
    });
    await newCard.save();

    const card = await Card.find();
    res.status(201).json(card);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getDeckCards = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Deck.find({ cardId });
    res.status(200).json(card);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getCardsByStatus = async (req, res) => {
  try {
    const { cardId } = req.params.cardId;
    const { status } = req.params.status;
    const card = await Deck.find({ cardId, status });
    res.status(200).json(card);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const updateCardFront = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const { front } = req.body;

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { front },
      { new: true }
    );

    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateCardBack = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const { back } = req.body;

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { back },
      { new: true }
    );

    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateCardFrontPicturePath = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const { frontPicturePath } = req.body;

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { frontPicturePath },
      { new: true }
    );

    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateCardBackPicturePath = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const { backPicturePath } = req.body;

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { backPicturePath },
      { new: true }
    );

    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateCardStatus = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const { status } = req.params.status;

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { status },
      { new: true }
    );

    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* DELETE */

export const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params.cardId;
    const deletedCard = await Deck.findByIdAndDelete(cardId);
    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
