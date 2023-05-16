import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const QuizRandPageItem = (props) => {

  const { id } = useParams()
  const { quiz } = props

  return (
    <>
      {quiz.map((item) => (
        item.id === id &&
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.question}</p>
          <img src={item.image} alt="" />
        </div>
      ))}
    </>
  )
}

export default QuizRandPageItem