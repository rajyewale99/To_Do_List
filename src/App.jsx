import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ludoboard from './Ludoboard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'
import { sum } from './helper'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comment from './Comment'
import Counter from './Counter'
import Joker from './Joker'
function App() {

  return (
    <>
     {/* <Ludoboard/>  */}
     {/* <TodoList/> */}
     {/* <Lottery n={3} winningSum={15} winCondition={winCondition}/> */}
     {/* <Ticket ticket={[0,1,2]}/>
     <Ticket ticket={[5,6,7,7,8]}/> */}
      {/* <Form/> */}
      {/* {<Comment/>} */}
      {/* {<CommentsForm/>} */}
      {/* {<Counter />} */}
      {<Joker/>}
    </>
  )
}

export default App
