import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { HeaderContainer, HeaderStyles } from "./HeaderStyle";
import Link from "next/link";

const Header = () => {
  return (
    <Box sx={{ ...HeaderStyles }}>
      <Box sx={{ ...HeaderContainer }}>
        <Link href={"/"}>
          <Image
            src="/assets/skillwillLogo.svg"
            alt="SkillwillLogo"
            width={180}
            height={22}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
