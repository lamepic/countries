import React from "react";
import "./ErrorPage.css"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function ErrorPage() {
  return (
    <div className="errorpage">
      <div className="errorpage__content">
        <h1>404</h1>
        <h3>Page Does Not Exist</h3>
        <Link to="/"><Button contained sx={{color: "#000"}}>Go Back</Button></Link>
      </div>
    </div>
  );
}

export default ErrorPage;
