import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDecks } from "state";
import DeckWidget from "./DeckWidget";

const DecksWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getDecks = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setDecks({ posts: data }));
  };

  const getUserDecks = async () => {
    const response = await fetch(
      `http://localhost:3001/decks/${userId}/decks`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setDecks({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserDecks();
    } else {
      getDecks();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          picturePath,
          userPicturePath,
        }) => (
          <DeckWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
          />
        )
      )}
    </>
  );
};

export default DecksWidget;