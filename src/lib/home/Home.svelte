<script>
  import { onMount } from "svelte";
  import TopBar from "./top/TopBar.svelte";

  let route = "Home";

  onMount(() => {
    isLoading = false;
  });

  export let isLoading = true;
  export let username;
</script>

<TopBar bind:route />

<h1>You are logged in as {username}</h1>
