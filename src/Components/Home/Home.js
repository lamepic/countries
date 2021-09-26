import React from "react";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./Home.css";
import CardList from "../CardList/CardList";

function Home() {
  
  return (
    <div className="home">
      <div className="home__selection">
        <SelectCategory />
      </div>
      <div className="home__content">
        <CardList />
      </div>
    </div>
  );
}

export default Home;
