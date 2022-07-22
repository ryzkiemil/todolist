<script>
	import Title from '$lib/TitlePage.svelte';
</script>

<main>
	<div class="container max-w-2xl border-2 border-[#fde047] rounded-lg flex flex-col center mt-40">
		<div class="mt-8">
			<Title>
				<p>Login to Todolist</p>
			</Title>
		</div>
		<input
			class="w-5/12 border-2 border-rose-600 rounded-md px-2 py-1 mx-auto my-1 mt-5"
			type="text"
			name="email"
			placeholder="Email"
		/>
		<input
			class="w-5/12 border-2 border-rose-600 rounded-md px-2 py-1 mx-auto my-1 mb-3"
			type="password"
			name="password"
			placeholder="Password"
		/>
		<button class="w-1/5 border-2 bg-[#e5e5e5] rounded-md mx-auto hover:bg-slate-50">Login</button>
		<p class="text-center mt-2 mb-8">
			Dont Have Account? <a href="/register" class="text-[#0ea5e9] hover:text-[#3b82f6]"
				>Register Here</a
			>
		</p>
	</div>
</main>
