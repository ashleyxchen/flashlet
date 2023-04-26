import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import DeckWidget from "scenes/widgets/DeckWidget";
import MyDeckWidget from "scenes/widgets/MyDeckWidget";


const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px")
    const { _id, picturePath } = useSelector((state) => state.user)
   
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* want deck widget to be flexible and fill up page */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <DeckWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyDeckWidget picturePath={picturePath} />
          <DeckWidget userId={_id} />
        </Box>
        {/* {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

export default HomePage;