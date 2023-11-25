// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ index, todo, updateStatus, updateDate, removeTodo }) => {
  const [editingDate, setEditingDate] = useState(false);
  const [dateInput, setDateInput] = useState(todo.date);

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const saveDate = () => {
    setEditingDate(false);
    updateDate(index, dateInput);
  };

  return (
    <li className="todo flex items-center justify-between bg-purple-800 rounded border-2 border-purple-300 mb-2 p-2 transition-all duration-200 ease-in-out">
      <label htmlFor={`todo-${index}`} className="cursor-pointer flex items-center text-white">
        <input
          id={`todo-${index}`}
          type="checkbox"
          checked={todo.status === 'completed'}
          onChange={() => updateStatus(index)}
          className="hidden"
        />
        <span
          className={`ml-2 ${todo.status === 'completed' && 'line-through'}`}
        >
          {todo.name}
        </span>
      </label>
      <div className="flex items-center">
        <input
          type="text"
          value={dateInput}
          onChange={handleDateChange}
          readOnly={!editingDate}
          onClick={() => setEditingDate(true)}
          onBlur={saveDate}
          className={`mx-2 bg-transparent border-none text-white ${
            editingDate ? 'border-b-2 border-purple-500' : ''
          }`}
        />
        <button
          className="delete-btn bg-transparent border-none cursor-pointer text-white text-2xl"
          onClick={() => removeTodo(index)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
