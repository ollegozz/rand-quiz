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
        <div key={item.id} className='text-center'>
            <h1 className='font-bold text-xl p-2'>{item.title}</h1>
            <p className='font-bold text-xl p-2'>{item.question}</p>
            <div className='flex justify-center'> 
              <img
                className='max-w-2xl'
                src={item.image} alt="" />
            </div>
          
        </div>
      ))}
    </>
  )
}

export default QuizRandPageItem