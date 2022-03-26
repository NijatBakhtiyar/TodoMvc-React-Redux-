import React from 'react'
import './App.scss'
import Todos from './components/Todos'
// import AddItem from './reducer/AddItem'
// import ReadItems from './reducer/ReadItems'

export default function App(){
    return (
      <div className="App">
        <h1>Todos</h1>
        <Todos/>
        {/* <AddItem />
        <ReadItems/> */}
      </div>
    )
}

