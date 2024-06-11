import { Adb } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" data-testid="Logo">
      <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </Stack>
  );
};

export default Logo;
