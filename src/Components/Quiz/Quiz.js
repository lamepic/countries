import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Quiz.css"

function Quiz() {
    return (
        <div className="quiz">
            <div className="quiz__content">
                <h1>Coming Soon</h1>
                <p>watch this space for exciting features</p>
                <Link to="/"><Button contained sx={{color: "#000"}}>Go Back</Button></Link>
            </div>
        </div>
    )
}

export default Quiz
