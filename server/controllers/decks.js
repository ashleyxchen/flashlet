import User from "../models/User.js";
import Deck from "../models/Deck.js";

/* CREATE */
export const createDeck = async (req, res) => {
  try {
    const { userId, deckId, deckName, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newDeck = new Deck({
      userId,
      deckId,
      deckName,
      description,
      userPicturePath,
      picturePath,
    });
    await newDeck.save();

    const deck = await Deck.find();
    res.status(201).json(deck);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getDeckById = async (req, res) => {
  try {
    const deckId = req.params.deckId;
    const deck = await Deck.findById(deckId).populate("cards");

    res.status(200).json(deck);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserDecks = async (req, res) => {
  try {
    const { userId } = req.params.userId;
    const deck = await Deck.find({ userId });

    res.status(200).json(deck);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const renameDeck = async (req, res) => {
  try {
    const deckId = req.params.deckId;
    const deckName = req.body;

    const deck = await Deck.findByIdAndUpdate(
      deckId,
      { deckName },
      { new: true }
    );

    res.status(200).json(deck);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePicturePath = async (req, res) => {
  try {
    const deckId = req.params.deckId;
    const picturePath = req.body;

    const deck = await Deck.findByIdAndUpdate(
      deckId,
      { picturePath },
      { new: true }
    );

    res.status(200).json(deck);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE */
export const deleteDeck = async (req, res) => {
  try {
    const { deckId } = req.params;
    const deletedDeck = await Deck.findByIdAndDelete(deckId);

    res.status(200).json({ message: "Deck deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
