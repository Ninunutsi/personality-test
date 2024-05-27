import { SxProps } from "@mui/material";

export const HeaderStyles: SxProps = {
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  padding: "35px 0",
  backgroundColor: "white",
  boxShadow: "0px 1px 6px #0000001A",
  zIndex: 1,
};

export const HeaderContainer: SxProps = {
  padding: "0 200px",
  maxWidth: 1920,
  margin: "0 auto",

  "@media (max-width: 1441px)": {
    padding: "0 100px",
  },

  "@media (max-width: 1023px)": {
    padding: "0 40px",
  },
};
