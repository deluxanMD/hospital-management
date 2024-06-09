import { Box, Drawer, useTheme } from "@mui/material";
import Logo from "components/logo/logo.component";
import SidebarList from "../sidebar-list/sidebar-list.component";

const DesktopSidebar = () => {
  const theme = useTheme();

  return (
    <Box component="nav" sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            p: 1,
            pt: 0,
            border: "none",
          },
        }}
        open
        PaperProps={{
          "data-testid": "Sidebar.Drawer",
          elevation: 16,
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: theme.palette.primary.main,
            alignItems: "center",
            justifyContent: "center",
            py: 4,
          }}
        >
          <Box sx={{ mr: 1, height: "40px" }}>
            <Logo />
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <SidebarList />
        </Box>
      </Drawer>
    </Box>
  );
};

export default DesktopSidebar;
