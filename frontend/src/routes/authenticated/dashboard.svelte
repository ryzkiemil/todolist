<script>
	import Modal from '$lib/Modal.svelte';
	import Form from '$lib/Form.svelte';
	import { onMount, afterUpdate, tick } from 'svelte';

	$: tasks = [];
	$: starred_task = [];

	let tasks_test = [
		{
			id: 1,
			name: 'Task 1',
			description: 'task description 1',
			task_master: 'task master 1',
			task_start: '2022-07-23',
			due_date: '2022-08-01',
			status: 0
		},
		{
			id: 2,
			name: 'Task 2',
			description: 'task description 2',
			task_master: 'task master 2',
			task_start: '2022-07-23',
			due_date: '2022-08-02',
			status: 0
		},
		{
			id: 3,
			name: 'Task 3',
			description: 'task description 3',
			task_master: 'task master 3',
			task_start: '2022-07-23',
			due_date: '2022-08-03',
			status: 0
		},
		{
			id: 4,
			name: 'Task 4',
			description: 'task description 4',
			task_master: 'task master 4',
			task_start: '2022-07-20',
			due_date: '2022-07-22',
			status: 0
		},
		{
			id: 5,
			name: 'Task 5',
			description: 'task description 5',
			task_master: 'task master 5',
			task_start: '2022-07-20',
			due_date: '2022-07-22',
			status: 1
		},
		{
			id: 6,
			name: 'Task 6',
			description: 'task description 6',
			task_master: 'task master 6',
			task_start: '2022-07-01',
			due_date: '2022-07-22',
			status: 0
		}
	];

	onMount(async () => {
		selectedDate = new Date();
		let curDate = new Date();

		(month = '' + (now.getMonth() + 1)), (day = '' + now.getDate()), (year = now.getFullYear());
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		selectedDate = [year, month, day].join('-');

		tasks_test.forEach((item) => {
			if (!item['status']) {
				curDate >= new Date(item['task_start']) ? (tasks = [item, ...tasks]) : '';
			}
		});
	});

	afterUpdate(() => {
		tasks = tasks;
		starred_task = starred_task;
		tasks_test = tasks_test;
		selectedDate = selectedDate;
	});

	function getDayCount(due_date) {
		let curDate = new Date();
		curDate.setHours(0, 0, 0, 0);
		let dueDate = new Date(due_date);
		dueDate.setHours(0, 0, 0, 0);
		return Math.ceil((dueDate - curDate) / (1000 * 60 * 60 * 24));
	}

	async function starredElement(index) {
		starred_task = [...starred_task, tasks.splice(index, 1)[0]];
	}

	async function unstarredElement(index) {
		tasks = [...tasks, starred_task.splice(index, 1)[0]];
		console.log(tasks);
	}

	async function updateShowTask() {
		tasks_test.forEach((item) => {
			if (!item['status']) {
				selectedDate >= new Date(item['task_start']) ? (tasks = [item, ...tasks]) : '';
			}
		});
	}

	async function taskFinish(index) {
		if (confirm('This task is complete?')) {
			let indexPointer = tasks.splice(index, 1)[0]['id'];
			tasks = [...tasks];
			let finishTaskIndex = tasks_test.findIndex((item) => item.id === indexPointer);
			tasks_test[finishTaskIndex].status = 1;
			console.log(tasks_test);
		}
	}

	console.log(tasks_test.slice(-1)[0].id);
	function addTask() {
		let lastIndex = tasks_test.slice(-1)[0].id;
		let task = {
			id: lastIndex,
			name: task_name,
			description: task_description,
			task_master: 'task master ' + lastIndex,
			task_start: task_date_start,
			due_date: task_due_date,
			status: 1
		};

		if (confirm('Are you sure to add this task?')) {
			newTask = [...newTask, task];
			alert('task add success');
		}
		task_name = '';
		task_description = '';
		task_due_date = '';
		console.log(newTask);
	}

	let selectedDate;
	let now = new Date(),
		month,
		day,
		year;
	let showModal_detail = false;
	let showModal_add = false;
	let description = '';

	let newTask = [];
	let task_name = '';
	let task_description = '';
	let task_date_start = '';
	let task_due_date = '';
</script>

{#if showModal_detail}
	<Modal>
		on:click = {() => {
			showModal_detail = false;
		}}
		<span slot="title">
			<h1>Task Detail</h1>
		</span>
		<span slot="content">
			<div class="text-center">
				<p>
					{description}
				</p>
			</div>
		</span>
		<span slot="button">
			<button
				on:click={() => {
					showModal_detail = false;
				}}
				class="bg-pink-500 uppercase font-medium text-white p-2 rounded-md"
			>
				Close
			</button>
		</span>
	</Modal>
{/if}
{#if showModal_add}
	<Modal>
		on:click = {() => {
			showModal_add = false;
		}}
		<span slot="title">
			<h1>Add New Task</h1>
		</span>
		<span slot="content">
			<Form>
				<span slot="field">
					<div class="flex flex-col space-y-5 mb-3">
						<input
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
					</div>
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
					</div>
					<div class="flex flex-col">
						<label for="due_date">Task Start Date: </label>
						<input
							bind:value={task_date_start}
							class="border-2 border-rose-600 rounded-md px-2 py-1 mx-auto w-4/12"
							type="date"
							name="due_date"
							id=""
							required
						/>
					</div>
				</span>
				<span slot="button">
					<button
						on:click={addTask}
						class="border-2 bg-[#e5e5e5] rounded-md mx-auto hover:bg-slate-50 py-1 px-2"
						>Add Task</button
					>
				</span>
			</Form>
		</span>
		<span slot="button">
			<button
				on:click={() => {
					showModal_add = false;
				}}
				class="bg-pink-500 uppercase font-medium text-white py-1 px-3 rounded-md"
			>
				Cancel
			</button>
		</span>
	</Modal>
{/if}
<div
	class="container max-w-xl border-2 border-[#fde047] rounded-lg flex flex-col center mt-40 p-5 px-5 space-y-2"
>
	<div class="flex justify-between">
		<h1 class="text-2xl">Today Task</h1>
		<!-- <input
			bind:value={selectedDate}
			on:change={updateShowTask}
			type="date"
			name="data_on_date"
			class="hover:cursor-pointer w-3/12"
			id=""
			placeholder="Select date"
		/> -->
	</div>
	<p
		on:click={() => {
			showModal_add = true;
		}}
		class="text-[#0ea5e9]/60 hover:text-[#0ea5e9] hover:cursor-pointer"
	>
		Add Task
	</p>
	<div class="space-y-2">
		{#each starred_task as task, i (task.id)}
			<div class="flex flex-row w-full space-x-5">
				<button class="hover:text-[#fb923c]">
					<i class="fa-solid fa-pen" />
				</button>
				<button class="hover:text-[#dc2626]">
					<i class="fa-solid fa-trash" />
				</button>
				<button
					on:click={() => {
						showModal_detail = true;
						description = task.description;
					}}
					class="flex justify-between w-full hover:text-[#fbbf24]"
				>
					<p>{task.name}</p>
					<p>
						{getDayCount(task.due_date) === 0 ? 'Today' : getDayCount(task.due_date) + ' day left'}
					</p>
				</button>
				<button
					on:click={() => {
						unstarredElement(i);
					}}
					class="text-[#fde047] hover:text-[#fde047]/60"
				>
					<i class="fa-solid fa-star" />
				</button>
				<button
					on:click={() => {
						taskFinish(i);
					}}
					class="hover:text-[#65a30d] text-[#65a30d]/40"
				>
					<i class="fa-solid fa-circle-check" />
				</button>
			</div>
		{/each}
	</div>
	<div class="space-y-2">
		{#each tasks as task, i (task.id)}
			<div class="flex flex-row w-full space-x-5">
				<button class="hover:text-[#fb923c]">
					<i class="fa-solid fa-pen" />
				</button>
				<button class="hover:text-[#dc2626]">
					<i class="fa-solid fa-trash" />
				</button>
				<button
					on:click={() => {
						showModal_detail = true;
						description = task.description;
					}}
					class="flex justify-between w-full hover:text-[#fbbf24]"
				>
					<p>{task.name}</p>
					<p>
						{getDayCount(task.due_date) === 0 ? 'Today' : getDayCount(task.due_date) + ' day left'}
					</p>
				</button>
				<button
					on:click={() => {
						starredElement(i);
					}}
					class="text-gray-100 hover:text-[#fde047]"
				>
					<i class="fa-solid fa-star" />
				</button>
				<button
					on:click={() => {
						taskFinish(i);
					}}
					class="hover:text-[#65a30d] text-[#65a30d]/40"
				>
					<i class="fa-solid fa-circle-check" />
				</button>
			</div>
		{/each}
	</div>
</div>
