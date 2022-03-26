import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TodoItem({ onEdit, todo, onDelete, onChecked }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    function updateIsEditing() {
        setIsEditing(true)
    }

    let storeItems = useSelector((store) => {
        return store
    })

    function formSubmit(e) {
        e.preventDefault();
        setIsEditing(false)

        storeItems = storeItems.map(item => {
            if (item.id == todo.id) {
                dispatch({ type: "edit", payload: { id: todo.id, newName: e.currentTarget.todo.value } })
                return { ...item, name: e.currentTarget.todo.value }
            }
            return item
        })
    }

    return (
        <div className='todo-item'>
            <label onDoubleClick={updateIsEditing}>
                <input type="checkbox" onChange={() => onChecked(todo.id)} checked={todo.checked ? 'checked' : ''} />
                {isEditing ? <form onSubmit={formSubmit}><input type="text" name='todo' className='note' defaultValue={todo.name} required /></form> : <span className={todo.checked ? 'checked' : null}>{todo.name}</span>
                }
            </label>
            <button onClick={() => onDelete(todo.id)}>X</button>
        </div>
    );
}

export default TodoItem;