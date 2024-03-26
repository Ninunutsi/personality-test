import { SxProps, keyframes } from "@mui/material";

export const StarRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const StarStyle: SxProps = {
  backgroundImage: `url("/assets/star.png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: 200,
  height: 200,
  animation: `${StarRotate} 10s linear infinite`,

  "@media (max-width: 1024px)": {
    alignSelf: "center",
  },
};

export const TextStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: 700,
};

export const ContentStyle: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "0 64px 64px",
  color: "black",

  "@media (max-width: 900px)": {
    alignItems: "center",
    textAlign: "center",

    padding: "0 30px 30px",
  },

  "@media (max-width: 768px)": {
    padding: "0 15px 15px",
  },
};

export const ButtonForm: SxProps = {
  "@media (max-width: 1024px)": {
    width: "100%",

    button: {
      width: "100%",
    },
  },
};
