import React from 'react';
import {connect} from 'react-redux';
import {addTodo, setVisibilityFilter, toggleTodo} from '../actions/index';
import {AddTodo, Link, TodoList} from '../components/index';

export const AddTodoContainer = connect(
    (state, ownProps) => ({}),
    (dispatch, ownProps) => ({onSubmit: (inputValue) => dispatch(addTodo(inputValue))})
)(AddTodo);

export const TodoFilter = connect(
    (state, ownProps) => ({active: ownProps.filter === state.todoFilter}),
    (dispatch, ownProps) => ({onClick: () => dispatch(setVisibilityFilter(ownProps.filter))})
)(Link);

const getVisibilityFrom = (todo, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return true;
        case 'SHOW_COMPLETED':
            return todo.completed;
        case 'SHOW_ACTIVE':
            return !todo.completed;
    }
};

export const VisibleTodoList = connect(
    (state) => ({todoList: state.todoList.filter(todo => getVisibilityFrom(todo, state.todoFilter))}),
    (dispatch) => ({onTodoClick: (id) => dispatch(toggleTodo(id))})
)(TodoList);
