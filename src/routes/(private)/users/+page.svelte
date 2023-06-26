<script>
	export let data;

</script>

<h1>Users page</h1>
{#each data?.data as user}
	<p>{user?.username}</p>
{/each}
