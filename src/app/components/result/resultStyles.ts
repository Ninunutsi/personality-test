import { SxProps } from "@mui/system";

export const GifText: SxProps = {
  textAlign: "center",
  fontSize: "clamp(14px, 3vw, 18px)",
  lineHeight: "30px",
  padding: "20px 0",

  "@media (max-width: 400px)": {
    padding: "5px 0",
    lineHeight: "20px",
  },
};

export const resultMainContainer: SxProps = {
  marginTop: "1.5rem",
  border: "2px solid black",
  borderRadius: "6px",
};

export const resultTypographyStyles: SxProps = {
  color: "#FF9D9C",
  fontSize: "clamp(32px, 4vw, 80px)",
  lineHeight: "75px",
  fontWeight: "bold",
  width: "100%",
  textAlign: "center",
  letterSpacing: "1px",

  "@media screen and (max-width: 580px)": {
    borderRadius: 0,
  },
};

export const resultTextStyles: SxProps = {
  color: "black",
  fontSize: "1.2rem",
};

export const resultBoxStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  color: "black",
  flexDirection: "column",
  // gap: "2rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",

  "@media screen and (max-width: 580px)": {
    borderRadius: 0,
  },
};

export const textTypography: SxProps = {
  margin: "3rem 0 0.5rem",
  fontSize: 26,
  fontWeight: "bold",
  textAlign: "center",

  "@media screen and (max-width: 580px)": {
    fontSize: 20,
  },
};

export const resultLinkContainerStyles: SxProps = {
  width: "100%",
  margin: "1rem 0",
  backgroundColor: "#ab7df4",
  borderRadius: "4px",
  padding: "23px 79px",
  minWidth: "64px",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  textAlign: "center",
  fontWeight: 500,
  fontSize: "1.25rem",
  "&:hover": {
    animation: "none",
  },
  "@media (max-width: 768px) ": {
    padding: "24px 40px",
    fontSize: "1.3rem",
  },
};

export const BoxContainerStyles: SxProps = {
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "white",
};

export const BoxedContent: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  padding: "0 1.5rem",
  flexDirection: "column",

  div: {
    img: {
      width: "100%",
      height: "100%",
      borderRadius: "0.5rem",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
  },

  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
  },
};

export const buttons: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  a: {
    color: "#ffffff",
    width: "100%",
    display: "block",
  },

  "@media screen and (max-width: 580px)": {
    flexDirection: "column",

    width: "100%",
    padding: "0.5rem",

    div: {
      width: "100%",
      button: {
        width: "100%",
      },
    },
  },
};
