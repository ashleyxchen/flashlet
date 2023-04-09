import { Box } from "@mui/material";

const DeckImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="deck"
        src={`http://localhost:3001/assets/deck/${image}`}
      />
    </Box>
  );
};

export default DeckImage;