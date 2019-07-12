import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface ITodo {
  logic: string;
  completed: string;
}

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState<string>('');

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    setTodos([...todos, { logic: value, completed: 'InCompleted' }]);
    setValue('');
  };

  const onRemoveTodo = (logic: string): void => {
    setTodos(todos.filter(todo => todo.logic !== logic));
  };

  const onCompleteTodo = (logic: string): void => {
    const newTodos = [];
    todos.map(todo => {
      if (todo.logic === logic) todo.completed === 'InCompleted' ? (todo.completed = 'completed') : (todo.completed = 'InCompleted');
      newTodos.push(todo);
    });
    setTodos(newTodos);
  };

  return (
    <>
      <form action="" onSubmit={onFormSubmit}>
        <label htmlFor="todo">
          <input value={value} onChange={evt => setValue(evt.target.value)} type="text" />
        </label>
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>
            <h6 style={{ textDecoration: todo.completed === 'completed' && 'line-through' }} onClick={() => onCompleteTodo(todo.logic)}>
              {todo.logic}
            </h6>
            <button onClick={() => onRemoveTodo(todo.logic)}>X</button>
          </div>
        ))}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
