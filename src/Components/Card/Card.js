import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./Card.css";
import Modal from '../Modal/Modal'



function CardItem({ country }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open && <Modal handleClose={handleClose} open={open} country={country} />}
      <Card sx={{height: "100%"}}>
        <CardMedia image={`flags/${country.flag}`} title={country.name.common} sx={{ paddingTop: "56.25%"}}/>
        <CardContent>
          <Typography variant="p" sx={{fontSize: "15px", fontWeight: 600,}}>
            Name : {country.name.common}
          </Typography><br />
          <Typography variant="p" sx={{fontSize: "15px", fontWeight: 600,}}>
            Capital : {country.capital[0]}
          </Typography><br />
          <Typography variant="p" sx={{fontSize: "15px", fontWeight: 600,}}>
            Continent : {country.region === "Americas" ? "America" : country.region}
          </Typography><br />
        </CardContent>
        <CardActions sx={{paddingTop: 0}}>
          <Button size="small" color="primary" onClick={handleClickOpen}>View</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardItem;
