<script>
  import { errorToast } from "../../common/notifications/theme";
  import { onMount } from "svelte";
  import { getUserExams } from "../../common/api";
  let exams = [];

  onMount(() => {
    getUserExams().then((res) => {
      if (res.success) {
        exams = res.exams;
      } else {
        errorToast(res.message);
      }
    });
  });

  let viewExam = (examId) => {
    window.location.href = `/exam/${examId}`;
  };
</script>

<h1>Your exams</h1>

{#if exams.length === 0}
  <p>You have no exams</p>
{:else}
  {#each exams as exam}
    <button id={exam.id} on:click={() => viewExam(exam.id)}>{exam.name}</button>
  {/each}
{/if}

<style>
  button {
    margin-right: 5px;
    margin-bottom: 5px;
  }
</style>
