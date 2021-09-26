import React from "react";
import { Container, Grid } from "@mui/material";
import { useStateValue } from "../../StateProvider";
import CardItem from "../Card/Card";

function CardList() {
  const [{ selectedCategory, search, countries }, dispatch] = useStateValue();

  // const handleList = () => {}

  return (
    <div className="cardlist">
      <Container maxWidth="md">
        <Grid container spacing={4} justify="center" sx={{padding: "20px 0"}}>
          {countries.map((country) => {
            const {name, region, capital, population, flag, alpha2Code} = country
            return (
              <Grid item xs={12} sm={6} md={4} key={alpha2Code}>
                <CardItem name={name} region={region} population={population} flag={flag} capital={capital} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default CardList;
