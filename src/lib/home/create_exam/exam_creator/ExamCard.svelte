<script>
  import { onMount } from "svelte";
  export let question;
  export let updateQuestions;
  export let shouldShowDelete;

  let shouldAddAnswer = () => {
    return (
      question.answers.length === 0 ||
      question.answers.every((a) => a.text !== "")
    );
  };

  let updateAnswers = () => {
    question.answers = question.answers.filter((answer) => answer.text !== "");
    if (shouldAddAnswer()) {
      question.answers.push({
        text: "",
        isCorrect: false,
      });
    }
    updateQuestions();
  };

  let deleteQuestion = () => {
    question.text = "";
    question.answers = [];
    question.isDeleted = true;
    updateAnswers();
  };

  onMount(() => {
    updateAnswers();
  });
</script>

<div class="container">
  <div class="row">
    <div style="flex-basis: calc(100%);">
      <textarea
        placeholder="Question here..."
        bind:value={question.text}
        on:input={updateAnswers}
      />
    </div>
    {#if shouldShowDelete}
      <span class="deleteButton" style="width: 75px;" on:click={deleteQuestion}>
        Delete
      </span>
    {/if}
  </div>
  {#each question.answers as answer}
    <div class="row">
      <div
        style="flex-basis: 7%;"
        class="switch"
        on:click={() => {
          answer.isCorrect = !answer.isCorrect;
          updateAnswers();
        }}
      >
        {answer.isCorrect ? "✓" : "✗"}
      </div>
      <div style="flex-basis: 93%;">
        <textarea
          placeholder="Answer here..."
          bind:value={answer.text}
          on:input={updateAnswers}
        />
      </div>
    </div>
  {/each}
</div>

<style>
  .row {
    margin: 10px;
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .deleteButton {
    background-color: #970e0e;
    color: white;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    user-select: none;
    transition: 0.3s;
    margin-left: 15px;
  }

  .deleteButton:hover {
    background-color: #b20e0e;
  }

  .container {
    width: 99%;
    max-height: 500px;
    min-height: 80px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    color: #d4d4d4;
    font-family: monospace;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: auto;
    overflow-x: hidden;
  }

  textarea {
    width: 100%;
    border: none;
    background-color: transparent;
    color: #d4d4d4;
    font-family: monospace;
    font-size: 16px;
    transition: 0.3s;
    border-bottom: 1px solid #d4d4d400;
  }

  textarea:focus {
    outline: none;
    border-bottom: 1px solid #d4d4d4;
  }

  textarea:hover {
    border-bottom: 1px solid #d4d4d4;
  }

  .switch {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #d4d4d466;
    transition: 0.3s;
    text-align: center;
    font-size: 22px;
    color: #d4d4d4;
    cursor: pointer;
    user-select: none;
  }

  .switch:hover {
    background-color: #d4d4d4;
    color: #1e1e1e;
  }
</style>
