import { Close } from "@mui/icons-material";
import { Box, Drawer, IconButton, useTheme } from "@mui/material";
import Logo from "components/logo/logo.component";
import SidebarList from "../sidebar-list/sidebar-list.component";
import { SidebarProps } from "../sidebar.component";

const PhoneSidebar = ({ open, onClose }: SidebarProps) => {
  const theme = useTheme();

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: { xs: 1, sm: 600 },
          p: 1,
        },
      }}
      PaperProps={{
        "data-testid": "PhoneSidebar.Drawer",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          color: theme.palette.primary.main,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mr: 1, height: "40px" }}>
            <Logo />
          </Box>
          <Box sx={{ position: "absolute", right: 0 }}>
            <IconButton
              data-testid="Sidebar.IconButton.Close"
              onClick={onClose}
            >
              <Close />
            </IconButton>
          </Box>
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
  );
};

export default PhoneSidebar;
