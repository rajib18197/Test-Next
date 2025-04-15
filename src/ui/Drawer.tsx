import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

const FlightDetailsButton = styled(Button)({
  color: "#3f4b63",
  padding: 0,
  fontWeight: "bold",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function FlightDetailsDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "800px" }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <FlightDetailsButton onClick={toggleDrawer(anchor, true)}>
            FLIGHT DETAILS
            <i
              style={{
                borderColor: "#0000 #0000 #0000 #34495e",
                borderWidth: "4px 4px 4px 6px",
                transform: "translate(6px, -1px)",
                textAlign: "center",
                margin: "auto",
                borderStyle: "solid",
              }}
            ></i>
          </FlightDetailsButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            style={{ width: "800px" }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
