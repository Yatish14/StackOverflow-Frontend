import React from 'react';
import Questions from "./Questions";

const QuestionList = ({ questionsList }) => {
  return (
    <>
        {
            questionsList.map((question) => {
                return <Questions question = {question} key={question._id}/>
            })
        }
    </>
  )
}

export default QuestionList
