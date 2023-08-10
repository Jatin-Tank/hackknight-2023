// import React from 'react'
// import './Quiz.css'
// import { useState } from 'react';

// const Quiz = ({ question, option1, option2, option3, option4 }) => {      

//     return (
//         <>
//             <div className="container mt-5">
//                 <div className="d-flex justify-content-center row">
//                     <div className="col-md-10 col-lg-10">
//                         <div className="border">
//                             <div className="question bg-white p-3 border-bottom">
//                                 <div className="d-flex flex-row justify-content-between align-items-center mcq">
//                                     <h4 style={{ fontSize: "30px" }}>MCQ Quiz</h4></div>
//                             </div>
//                             <div className="question bg-white p-3 border-bottom">
//                                 <div className="d-flex flex-row align-items-center question-title">
//                                     <h3 className="text-danger">Q.</h3>
//                                     <h5 className="mt-1 ml-2" style={{ fontSize: "20px" }}>{question}</h5>
//                                 </div><div className="ans ml-2">
//                                     <label className="radio"> <input type="radio" name="brazil" value="brazil" /> <span>{option1}</span>
//                                     </label>
//                                 </div><div className="ans ml-2">
//                                     <label className="radio"> <input type="radio" name="Germany" value="Germany" /> <span>{option2}</span>
//                                     </label>
//                                 </div><div className="ans ml-2">
//                                     <label className="radio"> <input type="radio" name="Indonesia" value="Indonesia" /> <span>{option3}</span>
//                                     </label>
//                                 </div><div className="ans ml-2">
//                                     <label className="radio"> <input type="radio" name="Russia" value="Russia" /> <span>{option4}</span>
//                                     </label>
//                                 </div></div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Quiz


import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ question, option1, option2, option3, option4, correctOption }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showScore, setShowScore] = useState(false);

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    const calculateScore = () => {
        return selectedOption === correctOption ? 1 : 0;
    };

    const showFinalScore = () => {
        setShowScore(true);
    };

    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10 col-lg-10">
                        <div className="border">
                            <div className="question bg-white p-3 border-bottom">
                                <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                    <h4 style={{ fontSize: "30px" }}>MCQ Quiz</h4>
                                </div>
                            </div>
                            <div className="question bg-white p-3 border-bottom">
                                <div className="d-flex flex-row align-items-center question-title">
                                    <h3 className="text-danger">Q.</h3>
                                    <h5 className="mt-1 ml-2" style={{ fontSize: "20px" }}>{question}</h5>
                                </div>
                                <div className="ans ml-2">
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="quiz-option"
                                            value={option1}
                                            onChange={() => handleOptionSelect(0)}
                                        />
                                        <span>{option1}</span>
                                    </label>
                                </div>
                                <div className="ans ml-2">
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="quiz-option"
                                            value={option2}
                                            onChange={() => handleOptionSelect(1)}
                                        />
                                        <span>{option2}</span>
                                    </label>
                                </div>
                                <div className="ans ml-2">
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="quiz-option"
                                            value={option3}
                                            onChange={() => handleOptionSelect(2)}
                                        />
                                        <span>{option3}</span>
                                    </label>
                                </div>
                                <div className="ans ml-2">
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="quiz-option"
                                            value={option4}
                                            onChange={() => handleOptionSelect(3)}
                                        />
                                        <span>{option4}</span>
                                    </label>
                                </div>
                                <button className='btn btn-success p-2 m-2 ' style={{ fontSize: "15px" }} onClick={showFinalScore}>Submit</button>
                                {showScore && (
                                    <p style={{ fontSize: "15px" }}>Your Score: {calculateScore()}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz;
