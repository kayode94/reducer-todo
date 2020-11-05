import React from 'react'



const TodoReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
        return{
            ...state, 
            todos:[...state.todos, action.payload]}

        case 'DELETE_TODO':
        return{
            ...state, 
            todos:[...state.todos.filter(todo => todo.id !== action.payload)]}

        default: return (state);
    }
}

export default TodoReducer