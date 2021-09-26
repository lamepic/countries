import React from "react";
import "./Navbar.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  width: "40%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [{search}, dispatch] = useStateValue()

  const handleChange = (event) => {
    event.preventDefault()
    dispatch({
      type: 'SEARCH',
      payload: event.target.value
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'tomato'}}>
        <Toolbar
          sx={{
            width: { lg: "80%", md: "80%", sm: "80%" },
            margin: "auto",
          }}
        >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
                fontSize: { xs: "18px" },
              }}
            >
              <Link to="/">
              Countries
              </Link>
            </Typography>
         
          <Link to="/quiz">
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{
                fontWeight: 600,
                marginRight: { lg: "35px", md: "35px", sm: "35px", xs: "15px" },
                color: "#000",
                marginBottom: "2px",
              }}
            >
              Quiz
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color: "#000"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleChange(e)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
