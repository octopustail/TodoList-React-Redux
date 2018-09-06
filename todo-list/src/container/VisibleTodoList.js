import {toggleTodo} from "../actions";
import TodoList from "../components/TodoList.react";
import {VisibilityFilters} from '../actions'
import {connect} from "react-redux"


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => t.completed === false);
        case VisibilityFilters.SHOW_ALL:
            return todos;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => {

    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)