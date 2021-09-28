import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Modal({handleClose, open, country}) {
  
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         {country.name.common}
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography sx={{fontSize: "15px", fontWeight: 700,}} gutterBottom>
            Official Name : {country.name.official}
          </Typography>
          <Typography sx={{fontSize: "15px", fontWeight: 700,}} gutterBottom>
            Capital : {country.capital[0]}
          </Typography>
          <Typography  sx={{fontSize: "15px", fontWeight: 700,}} gutterBottom>
            Continent : {country.region === "Americas" ? "America" : country.region}
          </Typography>
          <Typography  sx={{fontSize: "15px", fontWeight: 700,}} gutterBottom>
            Independent : {country.independent ? "Yes" : "No"}
          </Typography>
          <Typography  sx={{fontSize: "15px", fontWeight: 700,}} gutterBottom>
            Sub region : {country.subregion}
          </Typography>
          <Typography  sx={{fontSize: "15px", fontWeight: 700,}} gutterBottom>
            Calling Code : {country.callingCodes[0]}
          </Typography>
          <Typography sx={{fontSize: "15px", fontWeight: 700,}} gutterBottom>
            Population : {country.population}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default Modal;
