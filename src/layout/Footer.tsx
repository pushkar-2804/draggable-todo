import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/material";

interface Link {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const links: Link[] = [
  {
    href: "https://github.com/pushkar-2804",
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://linkedin.com/in/pushkar-khare-work",
    label: "LinkedIn",
    icon: <LinkedInIcon color="primary" />,
  },
];

const Footer: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: isSmallScreen ? 1 : 2,
        padding: isSmallScreen ? 1 : 2,
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      {links.map(({ href, label, icon }) => (
        <IconButton
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          sx={{
            color: "text.primary",
            "&:hover": { color: "primary.main" },
            fontSize: isSmallScreen ? "0.875rem" : "1rem",
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default Footer;
