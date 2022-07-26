<script>
	import { goto } from '$app/navigation';

	function logOut() {
		if (confirm('Are you sure to log out from system?')) {
			goto('/');
		}
	}

	let showDropdown = false;
</script>

<div
	class="flex justify-between box-border h-16 bg-gradient-to-r from-[#fdba74] via-[#fb923c] to-[#ea580c]"
>
	<button
		on:click={() => {
			goto('/authenticated/dashboard');
		}}
		class="text-white py-3 pl-20 text-2xl font-semibold">Todolist</button
	>
	<div class="flex text-white space-x-10 py-4 pr-24">
		<div class="dropdown">
			<button class="link">
				<p class="space-x-2 font-semibold">
					<i class="fa-solid fa-screwdriver-wrench" />
					<span> Organize </span>
					<i class="fa-solid fa-caret-down" />
				</p>
			</button>
			<div class="dropdown-menu">PlanTask</div>
		</div>
		<div class="dropdown">
			<button class="link">
				<p class="space-x-2 font-semibold">
					<i class="fa-solid fa-file" />
					<span>Report</span>
					<i class="fa-solid fa-caret-down" />
				</p>
			</button>
			<div class="dropdown-menu">FinishedTask</div>
		</div>
		<div
			on:mouseenter={() => {
				showDropdown = true;
			}}
			on:mouseleave={() => {
				showDropdown = false;
			}}
			class="relative"
		>
			<button class="">
				<p class="space-x-1 font-semibold">
					<i class="fa-solid fa-user" />
					<span>User</span>
					<i class="fa-solid fa-caret-down" />
				</p>
			</button>
			{#if showDropdown}
				<div
					class="absolute w-40 text-black bg-white py-1 justify-items-start p-3 shadow-md rounded-bl-lg"
				>
					<button class="hover:font-semibold">User Profile</button>
					<hr />
					<button on:click={logOut} class="hover:font-semibold">Log Out</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
</style>
