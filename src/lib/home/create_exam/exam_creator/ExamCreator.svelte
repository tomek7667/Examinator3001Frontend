<script>
  import ExamCard from "./ExamCard.svelte";
  import { onMount } from "svelte";
  export let examData;
  let shouldAddQuestion = () => {
    return examData.questions.every(
      (q) =>
        q.text !== "" &&
        q.answers.some((a) => a.isCorrect) &&
        q.answers.length > 1
    );
  };

  let updateQuestions = () => {
    examData.questions = examData.questions.filter(
      (question) => !question.isDeleted
    );
    if (shouldAddQuestion()) {
      examData.questions.push({
        text: "",
        answers: [],
        isCorrect: false,
      });
    }
  };

  onMount(() => {
    updateQuestions();
  });
</script>

<div class="body">
  <div class="creatorBody">
    {#each examData.questions as question}
      <ExamCard
        bind:question
        bind:updateQuestions
        shouldShowDelete={examData.questions.length > 1}
      />
      <br />
    {/each}
  </div>
  <br />
</div>

<style>
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
  }

  .creatorBody {
    width: 100%;
    height: 100%;
    min-height: 150px;
    overflow-y: scroll;
    overflow-x: hidden;
    resize: both;
    flex-direction: column;
    align-items: center;
  }
</style>
