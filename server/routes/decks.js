// create route for access of decks from Users, similar to posts.
// figure out how to route cards from decks. need separate route file?? research.
// also research how routes can be created dynamically from multiple layers
// of directory of decks.

import express from "express";
import {
  getUserDecks,
  renameDeck,
  updatePicturePath,
  deleteDeck,
} from "../controllers/decks.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// router.get("/", verifyToken, getUserPosts);
router.get("/:userId/decks", verifyToken, getUserDecks);

/* UPDATE */
router.patch("/:id/rename", verifyToken, renameDeck);
router.patch("/:id/deleteDecks", verifyToken, deleteDeck);
router.patch("/:id/updatePicturePath", verifyToken, updatePicturePath);


export default router;
