<script>
  import { routes } from "../common/routes.js";
  export let route;
</script>

<h1>Hi! What do you want to do?</h1>
<div>
  <button>Create exam</button>
  <button
    on:click={() => {
      route = routes.public_exams;
    }}>Browse public exams</button
  >
  <button
    on:click={() => {
      route = routes.your_exams;
    }}>Browse your exams</button
  >
  <button
    on:click={() => {
      route = routes.account;
    }}>Manage your account</button
  >
</div>

<style>
  div {
    margin: 0 auto;
  }

  button {
    margin-bottom: 0.2em;
  }
</style>
