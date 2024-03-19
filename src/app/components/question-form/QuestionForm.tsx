'use client'
import React, { useState } from 'react'
import QuestionsData from '../../../data/data.json'

// interface dasamatebelia
const QuestionForm = () => {
    const [data] = useState(QuestionsData)
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);

  const questions = data.questions
  const question = questions[questionsIndex]
console.log(question)
    console.log(data)
  return (
    <>
    <div key={question.question_number}>
        <p>{question.question_text}</p>
        {question.options.map((option, index) => (
            <p key={index}>{option.answer}</p>
        ))}
    </div>
    {/* <Button> onCLick დროს გაიზრდება კითხვის ინდექსი ერთით */}
    </>
  )
}

export default QuestionForm
