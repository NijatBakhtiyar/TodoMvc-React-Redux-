import React from 'react';
import { useDispatch } from 'react-redux';

function TodoForm() {
    const dispatch = useDispatch();

    function formSubmit(e) {
        e.preventDefault();

        const newItem = {
            name: e.currentTarget.todo.value,
            checked: false,
            id: +new Date()
        }
        e.currentTarget.reset();
        dispatch({ type: "add", payload: newItem })
    }

    return (
        <div className='todo-input'>
            <form onSubmit={formSubmit}>
                <input type="text" name='todo' placeholder='What needs to be done?' required />
            </form>
        </div>
    );
}

export default TodoForm;