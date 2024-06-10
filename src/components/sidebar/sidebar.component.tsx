/* istanbul ignore file */
import { useMediaQuery, useTheme } from "@mui/material";
import DesktopSidebar from "./desktop-sidebar/desktop-sidebar.component";
import PhoneSidebar from "./phone-sidebar/phone-sidebar.component";

export type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ ...rest }: SidebarProps) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("md"));

  return matchesSm ? <DesktopSidebar /> : <PhoneSidebar {...rest} />;
};

export default Sidebar;
