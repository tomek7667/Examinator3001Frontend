<script>
  import { routes } from "../common/routes.js";
  export let route;

  let createExam = () => {
    route = routes.create_exam;
  };

  let browsePublicExams = () => {
    route = routes.public_exams;
  };

  let browseYourExams = () => {
    route = routes.your_exams;
  };

  let manageAccount = () => {
    route = routes.account;
  };
</script>

<h1>Hi! What do you want to do?</h1>
<div>
  <button on:click={createExam}>Create exam</button>
  <button on:click={browsePublicExams}>Browse public exams</button>
  <button on:click={browsePublicExams}>Browse your exams</button>
  <button on:click={manageAccount}>Manage your account</button>
</div>

<style>
  div {
    margin: 0 auto;
  }

  button {
    margin-bottom: 0.2em;
  }
</style>
