import { Typography, useTheme, useMediaQuery } from "@mui/material";

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Typography
      variant={isSmallScreen ? "h5" : "h4"}
      align="center"
      sx={{
        padding: isSmallScreen ? "0.5rem" : "1rem",
        marginBottom: isSmallScreen ? "2rem" : "4rem",
        fontWeight: "bold",
        color: "primary.main",
      }}
    >
      Scooby Dooby Todo
    </Typography>
  );
};

export default Header;
