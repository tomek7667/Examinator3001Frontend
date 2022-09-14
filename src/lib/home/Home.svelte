<script>
  import { onMount } from "svelte";
  import TopBar from "./top/TopBar.svelte";
  import HomePage from "./HomePage.svelte";
  import PublicExamsPage from "./public_exams/PublicExamsPage.svelte";
  import YourExamsPage from "./your_exams/YourExamsPage.svelte";
  import AccountPage from "./AccountPage.svelte";
  import { routeNames } from "../common/routes.js";
  import CreateExamPage from "./create_exam/CreateExamPage.svelte";
  import Footer from "../common/Footer.svelte";
  export let isLoading = true;
  export let username;
  let route = "Home";
  let wantExamCreator = true;
  let canParse = true;
  let examData = {
    name: "",
    questions: [],
    isPublic: false,
  };
  onMount(() => {
    isLoading = false;
  });
</script>

<TopBar bind:route />

{#if route === routeNames[0]}
  <HomePage bind:route />
{:else if route === routeNames[1]}
  <PublicExamsPage />
{:else if route === routeNames[2]}
  <YourExamsPage />
{:else if route === routeNames[3]}
  <AccountPage bind:username />
{:else if route === routeNames[4]}
  <CreateExamPage bind:wantExamCreator bind:examData bind:canParse />
{/if}

<footer>You are logged in as <b>{username}</b><Footer /></footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #1e1e1e;
    height: 65px;
    width: 100%;
    padding: 10px;
  }
</style>
