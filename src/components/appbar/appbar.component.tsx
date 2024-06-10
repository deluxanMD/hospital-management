import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useAppBar } from "./appbar.hooks";
import { Menu } from "@mui/icons-material";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const { toggleSidebar } = useAppBar();

  return (
    <AppBar color="transparent" data-testid="ResponsiveAppBar" sx={{ px: 2 }}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" onClick={toggleSidebar} color="inherit">
            <Menu />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }} data-testid="">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
