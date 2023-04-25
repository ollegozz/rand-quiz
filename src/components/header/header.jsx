import React from 'react'

export default function Header() {
  return (
    <header className='flex p-5 bg-blue-100'>
      <div className='font-bold flex w-1/4 justify-center'>
        <div className='mr-5'>Quiz</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </div>
      <nav className='w-2/4'>        
        <ul className='flex justify-between'>
          <li className='px-10 hover:underline hover:text-blue-500'><a href="/#">Главная</a></li>
          <li className='px-10'><a href="/#">Квизы</a></li>
          <li className='px-10'><a href="/#">Загадки</a></li>
          <li className='px-10'><a href="/#">Интересное</a></li>
          <li className='px-10'><a href="/#">Справка</a></li>
        </ul>
      </nav>
      <div className='flex w-1/4 justify-center'>
        <button className='mr-3 py-1 px-3 border-2 rounded-full border-blue-500 hover:bg-blue-400 hover:text-white'>Войти</button>
        <button className='py-1 px-3 border-2 rounded-full border-blue-500 hover:bg-blue-400 hover:text-white'>Зарегистрироваться</button>
      </div>
    </header>
  )
}
