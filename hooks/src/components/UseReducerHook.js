import React, { useReducer, useState } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        default:
            return state;
    }
}

function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                ...state, 
                todos: [...state.todos, { todo: action.todo, completed: false }],
                todoCount: state.todoCount + 1,
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((t, idx) => idx === action.idx 
                ? { ...t, completed: !t.completed }
                : t),
                todoCount: state.todoCount,
            }
        default:
            return state;
    }
}

export const UseReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    const [{ todos, todoCount }, dispatchTodo] = useReducer(todoReducer, { todos: [], todoCount: 0 });
    const [todo, setTodo] = useState('');

    return (
        <div>
            <div>
                <div>Count: {count}</div>
                <button onClick={() => dispatch({type: 'inc'})}>
                    increment
                </button>
                <button onClick={() => dispatch({type: 'dec'})}>
                    decrement
                </button>
            </div>
            <div>text
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatchTodo({ type: 'ADD_TODO', todo });
                    setTodo('');
                }}>
                    <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
                    <button>Submit</button>
                </form>
                {todos.map((t, idx) => (
                    <div 
                        key={t.todo} 
                        onClick={() => dispatchTodo({ 
                            type: 'TOGGLE_TODO',
                            idx 
                        })}
                        style={{textDecoration: t.completed ? 'line-through' : ''}}>
                        {t.todo}
                    </div>
                ))}
                <p>Todo count is {todoCount}</p>
            </div>
        </div>
    );
};