<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="home-container">
	<h1>Welcome to SvelteKit Magic Link Authentication Example</h1>
	
	{#if $page.data.session}
		<div class="welcome-message">
			<h2>You're logged in!</h2>
			<p>Welcome back, {$page.data.session.user?.email}</p>
			<p>You now have access to the <a href="/protected">protected page</a>.</p>
		</div>
	{:else}
		<div class="welcome-message">
			<p>This is a demonstration of Auth.js integration with SvelteKit using magic link authentication.</p>
			<p>Please <a href="/auth/signin">sign in</a> to access the protected content.</p>
		</div>
	{/if}
	
	<div class="features">
		<div class="feature">
			<h3>Magic Link Authentication</h3>
			<p>Passwordless login via email magic links</p>
		</div>
		<div class="feature">
			<h3>Protected Routes</h3>
			<p>Example of route protection based on auth state</p>
		</div>
		<div class="feature">
			<h3>Prisma Integration</h3>
			<p>Using Prisma ORM for database interactions</p>
		</div>
	</div>
</div>

<style>
	.home-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem;
	}
	
	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: #333;
	}
	
	.welcome-message {
		background-color: #f5f5f5;
		padding: 1.5rem;
		border-radius: 8px;
		margin-bottom: 2rem;
	}
	
	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}
	
	.feature {
		background-color: #eef2ff;
		padding: 1.5rem;
		border-radius: 8px;
	}
	
	.feature h3 {
		margin-top: 0;
		color: #4f46e5;
	}
	
	a {
		color: #4f46e5;
		font-weight: bold;
		text-decoration: none;
	}
	
	a:hover {
		text-decoration: underline;
	}
</style>
