import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/product"
            sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
          >
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                letterSpacing: 6,
                fontFamily: "Monospace",
                fontStyle: "italic",
                fontSize: 22,
              }}
            >
              <Box component="span" sx={{ fontSize: 32 }}>
                Ze
              </Box>
              ki
            </Box>
          </Typography>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
