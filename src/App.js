import React, {useState} from 'react';
import Header from './components/header/header';
import QuizRandPage from './components/page/quizRandPage';
import Footer from './components/footer/footer';
import mock from './mock.json'

function App() {
  const [quiz, setQuiz] = useState(mock)

  return (
    <div>
      <Header />
      <QuizRandPage quiz={quiz} setQuiz={setQuiz}/>
      <Footer />

   </div>    
  )
}

export default App;
