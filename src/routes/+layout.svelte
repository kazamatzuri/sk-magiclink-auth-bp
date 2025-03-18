<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<nav class="navbar">
	<div class="container">
		<div class="brand">
			<a href="/">SvelteKit Auth Magic Link</a>
		</div>
		<div class="nav-links">
			<a href="/">Home</a>
			<a href="/protected">Protected Page</a>
			{#if $page.data.session}
				<span>Logged in as: {$page.data.session.user?.email}</span>
				<form action="/auth/signout" method="post">
					<button type="submit">Sign out</button>
				</form>
			{:else}
				<a href="/auth/signin">Sign in</a>
			{/if}
		</div>
	</div>
</nav>

<main class="container">
	{@render children()}
</main>

<style>
	.navbar {
		background-color: #333;
		color: white;
		padding: 1rem 0;
		margin-bottom: 2rem;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}
	
	.brand {
		font-size: 1.5rem;
		font-weight: bold;
	}
	
	.nav-links {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	
	a {
		color: #fff;
		text-decoration: none;
	}
	
	a:hover {
		text-decoration: underline;
	}
	
	button {
		background-color: #f44336;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
	}
	
	main {
		padding: 1rem 0;
	}
</style>
