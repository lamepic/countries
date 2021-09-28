import React, { useEffect } from "react";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./Home.css";
import CardList from "../CardList/CardList";
import { useStateValue } from "../../StateProvider";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";

function Home() {
  const [{ showScrollButton }, dispatch] = useStateValue();

  useEffect(() => {
    document.addEventListener("scroll", toggleScrollButton);

    return () => {
      document.removeEventListener("scroll", toggleScrollButton);
    };
  });

  const toggleScrollButton = () => {
    if (window.scrollY > 50) {
      dispatch({
        type: "SET_SHOW_SCROLL_BUTTON",
        payload: true,
      });
    } else {
      dispatch({
        type: "SET_SHOW_SCROLL_BUTTON",
        payload: false,
      });
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <div className="home__selection">
        <SelectCategory />
      </div>
      <div className="home__content">
        <CardList />
      </div>
      {showScrollButton && (
        <Fab
          color="primary"
          aria-label="up"
          sx={{ position: "fixed", right: 16, bottom: 16 }}
          onClick={scrollTop}
        >
          <UpIcon />
        </Fab>
      )}
    </div>
  );
}

export default Home;
