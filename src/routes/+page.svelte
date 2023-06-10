<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="test-variable-auto-loading">
	<p>variables are loading if the background for this is red</p>
</div>

<button class="btn btn-primary">Test bootsrap vraiable overides</button>

<div class="navbar-vertical pheonix-theme-test">
	<button class="btn btn-phoenix-secondary">test phoenix specific classes</button>
</div>

<div class="dark" />

<style lang="scss">
	.test-variable-auto-loading {
		background-color: $red;
	}
</style>
