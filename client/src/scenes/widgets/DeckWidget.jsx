import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
import { Box, Typography, IconButton, Divider, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeck } from "state";

const DeckWidget = ({
    deckUserId,
    deckId,
    name,
    description,
    picturePath,
    userPicturePath,
}) => {
    // const dispatch = useDispatch();
    // const token = useSelector((state) => state.token);
    // add bookmarked? similar to isLike

    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
    return (
        <WidgetWrapper m="2rem 0">
          <Friend
            friendId={deckUserId}
            name={name}
            userPicturePath={userPicturePath}
          />
          <Typography color={main} sx={{ mt: "1rem" }}>
            {description}
          </Typography>
          {picturePath && (
            <img
              width="100%"
              height="auto"
              alt="post"
              style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
              src={`http://localhost:3001/assets/${picturePath}`}
            />
          )}
          <FlexBetween mt="0.25rem">
            <FlexBetween gap="1rem">
              <FlexBetween gap="0.3rem">
                {/* <IconButton onClick={patchLike}>
                  {isLiked ? (
                    <FavoriteOutlined sx={{ color: primary }} />
                  ) : (
                    <FavoriteBorderOutlined />
                  )}
                </IconButton>
                <Typography>{likeCount}</Typography> */}
              </FlexBetween>
    
              {/* <FlexBetween gap="0.3rem">
                <IconButton onClick={() => setIsComments(!isComments)}>
                  <ChatBubbleOutlineOutlined />
                </IconButton>
                <Typography>{comments.length}</Typography>
              </FlexBetween> */}
            </FlexBetween>
    
            <IconButton>
              <ShareOutlined />
            </IconButton>
          </FlexBetween>
          {/* {isComments && (
            <Box mt="0.5rem">
              {comments.map((comment, i) => (
                <Box key={`${name}-${i}`}>
                  <Divider />
                  <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                    {comment}
                  </Typography>
                </Box>
              ))}
              <Divider />
            </Box>
          )} */}
        </WidgetWrapper>
      );
    };
    export default DeckWidget;
