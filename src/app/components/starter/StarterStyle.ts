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
  animation: `${StarRotate} 10s linear infinite`, // Changed ease-in-out to linear for smoother continuous rotation
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

  h2: {
    fontWeight: "bold",
    maxWidth: 930,
  },
};
