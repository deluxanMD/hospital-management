import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

type ListItem = {
  Icon: React.ElementType;
  label: string;
  children?: ListItem[];
};

const listItems: ListItem[] = [
  { Icon: SendIcon, label: "Send Email" },
  { Icon: DraftsIcon, label: "Drafts" },
  {
    Icon: InboxIcon,
    label: "Inbox",
    children: [{ Icon: StarBorder, label: "Starred" }],
  },
];

export default function SidebarList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" data-testid="SidebarList">
      {listItems.map(({ Icon, label, children }, index) => (
        <React.Fragment key={index}>
          <ListItemButton
            onClick={() => (!!children ? handleClick() : null)}
            data-testid="SidebarList.Item"
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
            {!!children ? open ? <ExpandLess /> : <ExpandMore /> : null}
          </ListItemButton>
          {!!children && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {children.map(({ Icon, label }, index) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={index}
                    data-testid="SidebarList.Group.Item"
                  >
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
