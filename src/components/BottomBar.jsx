function BottomBar({ unCheckedCount, onTypeChange, clearCompleted, todoType }) {

    return (
        <div className='todo-bottom'>
            <p className="item-left">{unCheckedCount} items left</p>
            <nav>
                <button className={todoType === 'all' ? 'active' : ''} onClick={() => onTypeChange('all')}>All</button>
                <button className={todoType === 'active' ? 'active' : ''} onClick={() => onTypeChange('active')}>Active</button>
                <button className={todoType === 'completed' ? 'active' : ''} onClick={() => onTypeChange('completed')}>Completed</button>
            </nav>
            <button className='clear-completed' onClick={clearCompleted}>Clear completed</button>
        </div>
    );
}

export default BottomBar;