import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setDecks: (state, action) => {
      state.decks = action.payload.decks;
    },
    setDeck: (state, action) => {
      const updatedDecks = state.posts.map((deck) => {
        if (deck._id === action.payload.deck._id) return action.payload.deck;
        return deck;
      });
      state.deck = updatedDecks;
    },
    setCards: (state, action) => {
      state.cards = action.payload.cards;
    },
    setCard: (state, action) => {
      const updatedCards = state.posts.map((card) => {
        if (card._id === action.payload.card._id) return action.payload.card;
        return card;
      });
      state.deck = updatedCards;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
