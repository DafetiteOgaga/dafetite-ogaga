import React, { useState } from "react";
// import { TaskList } from "./components/TaskList";

function TaskList (props) {
	return (
		<div>
			<h1>Above</h1>
			<h1>{props.task}</h1>
			<h1>Below</h1>
		</div>
	)
}

export default function ReactTest() {
	const [tasks, setTasks] = useState([
		{ id: 1, task: "Go shopping", done: true },
		{ id: 2, task: "Wash dishes", done: false },
	]);

	return (
		<TaskList tasks={tasks} />
	)
}

