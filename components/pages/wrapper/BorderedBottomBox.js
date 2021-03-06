import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";

const BorderedBottomBox = styled(Box)(() => ({
  borderBottom: `8px solid ${grey[900]}`,
}));

export default BorderedBottomBox;
