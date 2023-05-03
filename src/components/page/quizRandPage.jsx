import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const QuizRandPage = (props) => {

  const { quiz, setQuiz } = props
  const [id, setId] = useState()

  return (
    <div className='container mx-auto max-w-8xl'>
      <h2 className='font-bold text-xl text-center py-8'>QuizRandPage</h2>
      <div className='flex flex-row text-center flex-wrap justify-center'>

        {quiz.map((item) => (
          <div className='basis-1/4 py-2 px-2 border-2 rounded-[12px] m-1 max-w-xs' key={item.id}>
            <div className='font-bold text-xl p-2'>{item.title}</div>
            <div className='p-2'>{item.question}</div>
            <div className='pt-5 pb-2'>
              <button className='border-2 rounded-[12px] px-8  hover:bg-blue-400 hover:text-white text-xl font-bold'>
                <Link title={item.id} to={`/quiz/${item.id}`}>Открыть</Link>
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default QuizRandPage