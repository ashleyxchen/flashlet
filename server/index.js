import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import deckRoutes from "./routes/decks.js";
import cardRoutes from "./routes/cards.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { createDeck } from "./controllers/decks.js";
import { createCard } from "./controllers/cards.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import Deck from "./models/Deck.js";
import Card from "./models/Card.js";
import { users, posts } from "./data/index.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register); 
app.post("/posts", verifyToken, upload.single("picture"), createPost);/* verify tiken here since we want user to be logged in alr */
app.post("/decks", verifyToken, upload.single("picture"), createDeck);/* verify tiken here since we want user to be logged in alr */
app.post("/cards", verifyToken, upload.single("picture"), createCard);/* verify tiken here since we want user to be logged in alr */

// /* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/decks", deckRoutes);
app.use("/cards", cardRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    User.insertMany(users);
    Post.insertMany(posts);
    Deck.insertMany(decks);
    Card.insertMany(cards);
  })
  .catch((error) => console.log(`${error} did not connect`));
  // getting a decks isnot define did not connect since there are not examples of deck in data examples 