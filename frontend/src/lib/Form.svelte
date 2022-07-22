<script>
	// let newTask = [];

	// let task_name = '';
	// let task_description = '';
	// let task_due_date = '';

	// function addTask() {
	// 	let task = {
	// 		task_name: task_name,
	// 		task_description: task_description,
	// 		task_due_date: task_due_date
	// 	};

	// 	if (confirm('Are you sure to add this task?')) {
	// 		newTask = [...newTask, task];
	// 		alert('task add success');
	// 	}
	// 	task_name = '';
	// 	task_description = '';
	// 	task_due_date = '';
	// 	console.log(newTask);
	// }
</script>

<div class="flex flex-col w-full bg-[#fef9c3] py-5 px-10 rounded-lg text-center space-y-5">
	<slot name="field" />
	<!-- <input
		bind:value={task_name}
		class="border-2 border-rose-600 rounded-md px-2 py-1 mx-auto w-4/12"
		type="text"
		name="task_name"
		id=""
		placeholder="Your Task Name"
		required
	/>
	<input
		bind:value={task_description}
		class="border-2 border-rose-600 rounded-md px-2 py-1 mx-auto w-4/12"
		type="text"
		name="task_description"
		id=""
		placeholder="Your Task Description"
		required
	/>
	<div class="flex flex-col">
		<label for="due_date">Task Due Date: </label>
		<input
			bind:value={task_due_date}
			class="border-2 border-rose-600 rounded-md px-2 py-1 mx-auto w-4/12"
			type="date"
			name="due_date"
			id=""
			required
		/>
	</div> -->
	<slot name="button" />
	<!-- <button
		on:click={addTask}
		class="border-2 bg-[#e5e5e5] rounded-md mx-auto hover:bg-slate-50 py-1 px-2">Add Task</button
	> -->
</div>
