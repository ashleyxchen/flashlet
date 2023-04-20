import express from "express";
import {
  getDeckCards,
  getCardsByStatus,
  updateCardFront,
  updateCardBack,
  updateCardFrontPicturePath,
  updateCardBackPicturePath,
  updateCardStatus,
} from "../controllers/cards.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// router.get("/", verifyToken, getUserPosts);
router.get("/:userId/:deckId/cards", verifyToken, getDeckCards);
router.get("/:userId/:deckId/cardsStatus", verifyToken, getCardsByStatus);

/* UPDATE */
router.patch("/:id/front", verifyToken, updateCardFront);
router.patch("/:id/back", verifyToken, updateCardBack);
router.patch("/:id/frontPic", verifyToken, updateCardFrontPicturePath);
router.patch("/:id/backPic", verifyToken, updateCardBackPicturePath);
router.patch("/:id/status", verifyToken, updateCardStatus);

export default router;
