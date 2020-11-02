export const initialValues = {
    item: 'Learn about reducers',
    completed:false,
    id: Math.floor(Math.random() * 100)
    
}

export const reducer = (state, action) =>{
    switch(action.type){
        case('ADD_TODO'):
        return({...state, title:action.payload})

        case('TOGGLE_TODO'):
        return({...state, title:action.payload})

        case('CLEAR_TODO'):
        return({...state, title:action.payload})
    }
}