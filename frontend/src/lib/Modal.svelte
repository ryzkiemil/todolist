<script>
</script>

<div
	on:click|self
	class="bg-black/60 p-8 flex justify-center items-start z-50 w-full h-screen absolute inset-0"
>
	<div
		class="p-8 bg-white w-full md:w-1/2 rounded-md flex flex-col items-center justify-center text-black "
	>
		<div class="font-bold text-2xl p-4 bg-[#fef9c3] mb-6 pt-6 w-full text-center">
			<slot name="title" />
		</div>
		<div class="mb-4 w-full">
			<slot name="content">
				<p>No content provided</p>
			</slot>
		</div>
		<div>
			<slot name="button">
				<button
					on:click
					class="bg-black uppercase font-medium text-white px-5 rounded-md text-center"
					>close</button
				>
			</slot>
		</div>
	</div>
</div>
