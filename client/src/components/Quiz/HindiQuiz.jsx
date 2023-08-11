import React from 'react'
import questions from "../../quizHindi.json"
import Quiz from "./Quiz"
import './Quiz.css'
import Navbar from '../Navbar/Navbar'

const HindiQuiz = () => {
    return (
        <>
        <Navbar home="Home" hindi="Hindi Quiz" english="English Quiz"/>
            {
                questions.map((ele) => {
                    return (<Quiz key={ele.id} question={ele.question} option1={ele.options[0]} option2={ele.options[1]} option3={ele.options[2]} option4={ele.options[3]} correctOption={ele.correct_option} />)
                })
            }
        </>
    )
}

export default HindiQuiz