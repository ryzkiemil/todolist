<script>
	import Title from '$lib/TitlePage.svelte';
</script>

<main>
	<div class="container max-w-2xl border-2 border-[#fde047] rounded-lg flex flex-col center mt-40">
		<div class="mt-8">
			<Title>
				<p>Create Todolist Account</p>
			</Title>
		</div>
		<input
			class="w-5/12 border-2 border-rose-600 rounded-md px-2 py-1 mx-auto my-1 mt-5"
			type="text"
			name="email"
			id=""
			placeholder="Your email"
		/>
		<input
			class="w-5/12 border-2 border-rose-600 rounded-md px-2 py-1 mx-auto my-1"
			type="text"
			name="name"
			id=""
			placeholder="Your name"
		/>
		<input
			class="w-5/12 border-2 border-rose-600 rounded-md px-2 py-1 mx-auto my-1"
			type="password"
			name="password"
			id=""
			placeholder="Your password"
		/>
		<input
			class="w-5/12 border-2 border-rose-600 rounded-md px-2 py-1 mx-auto my-1 mb-3"
			type="password"
			name="password"
			id=""
			placeholder="Retype Your password"
		/>
		<button class="w-1/5 border-2 bg-[#e5e5e5] rounded-md mx-auto hover:bg-slate-50">Login</button>
		<p class="text-center mt-2 mb-8">
			Already Have Account? <a href="/register" class="text-[#0ea5e9] hover:text-[#3b82f6]"
				>Login Here</a
			>
		</p>
	</div>
</main>
