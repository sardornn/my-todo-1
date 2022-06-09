import React from 'react';


import Todo from './components/Todo/Todo';

function App() {
	const [todos, setTodos] = React.useState([]);

	const handleDelete = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;

		const filteredTodos = todos.filter((todo) => todo.id !== todoId);

		setTodos(filteredTodos);
	};

	const handleCheck = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;

		const foundTodo = todos.find((todo) => todo.id === todoId);

		foundTodo.isCompleted = !foundTodo.isCompleted;

		// setTodos(todos);
		setTodos([...todos]);
	};

	return (
		<main className='main'>
			<input
				type='text'
				onKeyUp={(evt) => {
					if (evt.code === 'Enter') {
						const newTodo = {
							id: todos[todos.length - 1]?.id + 1 || 0,
							title: evt.target.value.trim(),
							isCompleted: false,
						};

						setTodos([...todos, newTodo]);

						evt.target.value = null;
					}
				}}
			/>

			<ul className='todos'>
				{todos.length > 0 &&
					todos.map((todo) => (
						<Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck}>
							{todo.title}
						</Todo>
					))}
			</ul>
		</main>
	);
}

export default App;


