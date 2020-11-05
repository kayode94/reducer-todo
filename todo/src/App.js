import './App.css';
import React,{useReducer, useState} from 'react'
import reducer from './Reducer/reducer'

const initialState = {
  todos: [{
      item:'Learn about reducers',
      completed: false,
      id: Date.now(),
  }]
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [text, setText] = useState()

  //helpers
  const handleChange = (event) =>{
    setText(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    dispatch({type:'ADD_TODO', text})
    setText('')
  }

  const handleDelete = (event) =>{
    event.preventDefault()
    dispatch({type: 'DELETE_TODO'})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
        value={text}
        onChange={handleChange}
        />
        <button onClick={handleDelete}>Delete Todos</button>
      </form>
    </div>
  );
}

export default App;
