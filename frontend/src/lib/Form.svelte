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
	<slot name="button" />
</div>
