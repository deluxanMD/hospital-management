/* istanbul ignore file */
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

type ListItem = {
  key: string;
  Icon: React.ElementType;
  label: string;
  children?: ListItem[];
  path: string;
};

const listItems: ListItem[] = [
  { key: "dashboard", Icon: Dashboard, label: "Dashboard", path: "/" },
];

const SidebarList = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("dashboard");
  const navigate = useNavigate();

  const handleClick = (item: Omit<ListItem, "Icon">, parentPath?: string) => {
    if (!!item.children) {
      setOpen(!open);
    } else {
      setSelected(item.key);
      !!parentPath
        ? navigate(`${parentPath}/${item.path}`)
        : navigate(item.path);
    }
  };

  return (
    <List component="nav" data-testid="SidebarList">
      {listItems.map(({ Icon, ...rest }, index) => (
        <Fragment key={index}>
          <ListItemButton
            onClick={() => handleClick(rest)}
            data-testid="SidebarList.Item"
            selected={selected === rest.key}
          >
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={rest.label} />
            {!!rest.children ? open ? <ExpandLess /> : <ExpandMore /> : null}
          </ListItemButton>
          {!!rest.children && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {rest.children.map(({ Icon, ...innerRest }, index) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={index}
                    onClick={() => handleClick(innerRest, rest.path)}
                    data-testid="SidebarList.Group.Item"
                    selected={selected === innerRest.key}
                  >
                    <ListItemIcon>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={innerRest.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default SidebarList;
