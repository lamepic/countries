import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "./Card.css";

function CardItem({ name, capital, flag, population, continent }) {
  return (
    <div>
      <Card sx={{height: "100%"}}>
        <CardMedia image={flag} title="Card Title" sx={{ paddingTop: "56.25%"}}/>
        <CardContent>
          <Typography variant="p" sx={{fontSize: "15px", fontWeight: 600,}}>
            Name : {name}
          </Typography><br />
          <Typography variant="p" sx={{fontSize: "15px", fontWeight: 600,}}>
            Capital : {capital}
          </Typography><br />
          <Typography variant="p" sx={{fontSize: "15px", fontWeight: 600,}}>
            Continent : {continent}
          </Typography><br />
          <Typography variant="p" sx={{fontSize: "15px", fontWeight: 600,}}>
            Population : {population}
          </Typography><br />
        </CardContent>
        <CardActions sx={{paddingTop: 0}}>
          <Button size="small" sx={{color: "tomato"}}>View</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardItem;

{
  /* <div className="card__content">
        <img
          src={flag}
          className="card__img"
          alt="flag"
        />
        <div className="card__subtitle">
          <p>Name: {name}</p>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p>Continent: {continent}</p>
        </div>
      </div> */
}
