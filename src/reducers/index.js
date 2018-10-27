import {combineReducers} from 'redux';

const newTodo = (action) => ({id: action.id, text: action.text, completed: false});

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return newTodo(action);
        case 'TOGGLE_TODO':
            return state.id === action.id ? Object.assign({}, state, {completed: !state.completed}) : state;
        default:
            return state;
    }
};

const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, newTodo(action)];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const todoFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default combineReducers({todoList, todoFilter});
