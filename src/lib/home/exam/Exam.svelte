<script>
  import { getExam } from "../../common/api";
  import { onMount } from "svelte";
  export let id;
  let exam;

  onMount(() => {
    getExam(id).then((result) => {
      if (result.success) {
        exam = result.exam;
      } else {
        window.location.href = "/";
      }
    });
  });

  let checkText = (element) => {
    try {
      let checkBox = element.parentElement.children[0];
      checkBox.checked = !checkBox.checked;
    } catch (_) {}
  };
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
              <span class="answer_text" on:click={(e) => checkText(e.target)}
                >{answer.text}</span
              >
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
    margin: 0.5rem;
  }

  .answer_text {
    margin-top: 0;
    margin-left: 0.5rem;
  }
</style>
