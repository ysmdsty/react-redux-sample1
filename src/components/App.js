import React from 'react';
import {AddTodoContainer, VisibleTodoList, TodoFilter} from '../containers/index';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodoContainer/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <p>
                Show: {" "}
                <TodoFilter filter="SHOW_ALL"> Todo (All) </TodoFilter> {", "}
                <TodoFilter filter="SHOW_ACTIVE"> Todo (Active) </TodoFilter> {", "}
                <TodoFilter filter="SHOW_COMPLETED"> Todo (Completed) </TodoFilter>
            </p>
        );
    }
}
