import { Box } from "@mui/material";
import ResponsiveAppBar from "components/appbar/appbar.component";
import Sidebar from "components/sidebar/sidebar.component";
import { Outlet } from "react-router-dom";
import { useMainLayoutComponent } from "./main-layout.hooks";

const MainLayout = () => {
  const { sidebarOpen, onCloseSidebar } = useMainLayoutComponent();

  return (
    <Box display="flex" width="100%" height="100%">
      <Sidebar open={sidebarOpen} onClose={onCloseSidebar} />
      <Box
        flexGrow={1}
        height="100%"
        display="flex"
        flexDirection="column"
        sx={{ overflowX: "auto" }}
      >
        <ResponsiveAppBar />
        <Box
          component="main"
          display="flex"
          flexGrow={1}
          flexDirection="column"
          sx={{ overflowY: "auto", scrollBehavior: "smooth" }}
          id="main"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
