<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="protected-container">
	<div class="protected-banner">
		<h1>Protected Page</h1>
		<div class="protected-badge">Authenticated Access Only</div>
	</div>
	
	<div class="user-info">
		<h2>Your User Information</h2>
		<div class="info-card">
			<div class="info-item">
				<strong>Email:</strong> 
				<span>{$page.data.user?.email}</span>
			</div>
			{#if $page.data.user?.name}
				<div class="info-item">
					<strong>Name:</strong> 
					<span>{$page.data.user.name}</span>
				</div>
			{/if}
			{#if $page.data.user?.image}
				<div class="user-image">
					<img src={$page.data.user.image} alt="Profile picture" />
				</div>
			{/if}
		</div>
	</div>
	
	<div class="content">
		<h2>Sensitive Content</h2>
		<p>This page is only accessible to authenticated users. If you're seeing this, it means you've successfully logged in using a magic link sent to your email.</p>
		<p>In a real application, this section would contain protected information or functionality that requires authentication.</p>
	</div>
</div>

<style>
	.protected-container {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.protected-banner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
	
	.protected-badge {
		background-color: #4f46e5;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-weight: bold;
	}
	
	.user-info {
		margin-bottom: 2rem;
	}
	
	.info-card {
		background-color: #f5f5f5;
		padding: 1.5rem;
		border-radius: 8px;
	}
	
	.info-item {
		margin-bottom: 0.5rem;
	}
	
	.user-image {
		margin-top: 1rem;
	}
	
	.user-image img {
		border-radius: 50%;
		height: 80px;
		width: 80px;
		object-fit: cover;
	}
	
	.content {
		background-color: #eef2ff;
		padding: 1.5rem;
		border-radius: 8px;
	}
</style>