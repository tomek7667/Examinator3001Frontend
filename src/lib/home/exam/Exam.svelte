<script>
  import { getCookie, getExam } from "../../common/api";
  import { onMount } from "svelte";
  export let id;
  let exam;

  onMount(() => {
    getExam(id, getCookie("token")).then((result) => {
      if (result.success) {
        exam = result.exam;
      } else {
        window.location.href = "/";
      }
    });
  });
</script>

<div class="container">
  {#if exam}
    <h1>{exam.name}</h1>
    {#each exam.questions as question}
      <div class="question">
        <h2>{question.text}</h2>
        <div class="answers">
          {#each question.answers as answer}
            <div class="answer">
              <input type="checkbox" name={question.text} value={answer.text} />
              {answer.text}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 700px;
    min-width: 500px;
    overflow-y: auto;
  }
  .question {
    margin: 1rem 0;
  }

  .answers {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .answer {
    margin: 0.5rem 0;
  }

  .answer input {
    margin-right: 0.5rem;
  }

  .answer input:checked {
    background-color: #00ff00;
  }
</style>
