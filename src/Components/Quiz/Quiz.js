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
                <Button sx={{color: "#000"}}><Link to="/">Go Back</Link></Button>
            </div>
        </div>
    )
}

export default Quiz
