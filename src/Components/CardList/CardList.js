import React, { useEffect } from "react";
import "./CardList.css";
import { Container, Grid } from "@mui/material";
import { useStateValue } from "../../StateProvider";
import CardItem from "../Card/Card";

function CardList() {
  const [
    { selectedCategory, search, countries, displayCategory },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    if (selectedCategory === "All") {
      dispatch({
        type: "SET_DISPLAY_CATEGORY",
        payload: countries,
      });
    } else {
      const data = countries.filter(
        (country) => country.region === selectedCategory
      );
      dispatch({
        type: "SET_DISPLAY_CATEGORY",
        payload: data,
      });
    }
  }, [selectedCategory, countries, dispatch]);

  useEffect(() => {
    const data = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({
      type: "SET_DISPLAY_CATEGORY",
      payload: data,
    });
  }, [dispatch, countries, search]);

  return (
    <div className="cardlist">
      <Container maxWidth="md">
        <Grid container spacing={4} justify="center" sx={{ padding: "20px 0" }}>
          {displayCategory.map((country) => {
            const { ccn3 } = country;
            return (
              <Grid item xs={12} sm={6} md={4} key={ccn3}>
                <CardItem country={country} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default CardList;
