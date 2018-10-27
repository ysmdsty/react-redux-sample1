import React from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends React.Component {
    render() {
        let input;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) return;
                    this.props.onSubmit(input.value);
                    input.value = ''
                }}>
                    <input ref={node => {
                        input = node
                    }}/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

export class Todo extends React.Component {
    render() {
        return (
            <li>
                <button
                    onClick={this.props.onClick}
                    style={{
                        textDecoration: this.props.completed ? 'line-through double red' : 'none',
                        fontSize: 17
                    }}
                >
                    {this.props.text}
                </button>
            </li>
        );
    }
}

// 制約
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todoList.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.onTodoClick(todo.id)}
                    />
                )}
            </ul>
        );
    }
}

// 制約
TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export class Link extends React.Component {
    render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>;
        }

        return (
            <a href="#"
               onClick={e => {
                   e.preventDefault();
                   this.props.onClick();
               }}
            >
                {this.props.children}
            </a>
        );
    }
}

// 制約
Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

