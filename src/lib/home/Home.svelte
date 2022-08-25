<script>
  import { onMount } from "svelte";
  import TopBar from "./top/TopBar.svelte";
  import HomePage from "./HomePage.svelte";
  import PublicExamsPage from "./PublicExamsPage.svelte";
  import YourExamsPage from "./YourExamsPage.svelte";
  import AccountPage from "./AccountPage.svelte";

  let route = "Home";
  let routeNames = ["Home", "Public Exams", "Your Exams", "Account"];

  onMount(() => {
    isLoading = false;
  });

  export let isLoading = true;
  export let username;
</script>

<TopBar bind:route />

{#if route === routeNames[0]}
  <HomePage />
{:else if route === routeNames[1]}
  <PublicExamsPage />
{:else if route === routeNames[2]}
  <YourExamsPage />
{:else if route === routeNames[3]}
  <AccountPage />
{/if}

<footer>You are logged in as <b>{username}</b></footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #1e1e1e;
    height: 45px;
    width: 100%;
    padding: 10px;
  }
</style>
