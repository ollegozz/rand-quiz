import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const QuizRandPageItem = (props) => {

  const { id } = useParams()
  const { quiz } = props
  const [answer, setAnswer] = useState(false)

  function getAnswer() {
    setAnswer(!answer)
  }

  return (
    <>
      {quiz.map((item) => (
        item.id === id &&
        <div key={item.id} className='text-center'>
          <h1 className='font-bold text-xl p-2'>{item.title}</h1>
          <p className='font-bold text-xl p-2'>{item.question}</p>
          {answer ?
            <div>
              <button
                className='m-10 p-3 px-3 border-2 rounded-full border-blue-500 hover:bg-blue-400 hover:text-white'
                onClick={getAnswer}>
                  <Link to={`/quiz/`}>На страницу загадок</Link>
                  </button>
              <p>{item.answer}</p>
              <div className=' justify-center flex'>
                <img
                  className='max-w-2xl'
                  src={item.image} alt="" />
              </div>
            </div>
            :
            <div>
              <button
                className='m-10 p-3 border-2 rounded-full border-blue-500 hover:bg-blue-400 hover:text-white'
                onClick={getAnswer}>Показать ответ</button>
            </div>
          }


        </div>
      ))}
    </>
  )
}

export default QuizRandPageItem