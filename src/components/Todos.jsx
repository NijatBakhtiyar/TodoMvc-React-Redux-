import React, { useState } from 'react';
import BottomBar from './BottomBar';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';

function Todos() {
    const [todoType, setTodoType] = useState('all')

    const dispatch = useDispatch();

    let todoItems = useSelector(store => store)

    function clearCompleted() {
        dispatch({ type: "clearCompleted" })
    }

    function onDelete(todoId) {
        dispatch({ type: "remove", payload: todoId })
    }

    function onChecked(todoId) {
        dispatch({ type: "checked", payload: todoId })
    }

    function onTypeChange(todoType) {
        setTodoType(todoType)
    }

    const unCheckedList = todoItems.filter(todo => todo.checked === false);
    const checkedList = todoItems.filter(todo => todo.checked === true);
    const list = todoType === 'all' ? todoItems : todoType === 'active' ? unCheckedList : checkedList;

    return (
        <div className='todos'>
            <TodoForm />
            {list.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onChecked={onChecked}
                />
            ))}

            {todoItems.length > 0
                &&
                <BottomBar
                    unCheckedCount={unCheckedList.length}
                    onTypeChange={onTypeChange}
                    clearCompleted={clearCompleted}
                    todoType={todoType}
                />}
        </div>
    );
}

export default Todos;