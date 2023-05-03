import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/page/main';
import QuizRandPage from './components/page/quizRandPage';
import QuizRandPageItem from './components/page/quizRandPageItem';
import Footer from './components/footer/footer';
import mock from './mock.json'

function App() {
  const [quiz, setQuiz] = useState(mock)

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/quiz' element={<QuizRandPage quiz={quiz} setQuiz={setQuiz}/>}/>
          <Route path='/quiz/:id' element={<QuizRandPageItem />}/>
        </Routes>
      </BrowserRouter>      
      <Footer />
    </div>
  )
}

export default App;
