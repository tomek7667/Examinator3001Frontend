<script>
  import ExamCreator from "./exam_creator/ExamCreator.svelte";
  import RawEditor from "./raw_editor/RawEditor.svelte";
  import {
    successToast,
    errorToast,
  } from "../../common/notifications/theme.js";
  import { onMount } from "svelte";
  import PublicMark from "./PublicMark.svelte";
  export let wantExamCreator = true;
  export let canParse;
  export let examData;
  let message = "exam creator";
  let switchModes = () => {
    wantExamCreator = !wantExamCreator;
    message = wantExamCreator ? "exam creator" : "raw editor";
  };
  onMount(() => {
    message = wantExamCreator ? "exam creator" : "raw editor";
  });

  let createExam = () => {
    if (examData.questions.length === 0) {
      errorToast("Exam must have at least one question");
      return;
    } else if (examData.name === "") {
      errorToast("Exam must have a name");
      return;
    } else {
      successToast("Exam created");
    }
  };
</script>

<p class="switchModes" on:click={switchModes}>
  I want to use <b>{message}</b>
</p>
<input type="text" placeholder="Exam name" bind:value={examData.name} />
<PublicMark bind:isChecked={examData.isPublic} />
<hr />
<div class="editorWrapper">
  {#if wantExamCreator}
    <ExamCreator bind:examData />
  {:else}
    <RawEditor bind:examData bind:canParse />
  {/if}
</div>
<br />
<br />
<hr />
<button on:click={createExam}>Create exam</button>

<style>
  .switchModes {
    cursor: pointer;
    font-size: 18px;
    text-decoration-color: rgba(255, 255, 255, 0);
    transition: 0.3s;
    text-decoration-line: underline;
  }

  .switchModes:hover {
    text-decoration-color: rgba(255, 255, 255, 0.5);
  }

  .editorWrapper {
    width: 500px;
    height: 400px;
    margin-right: 20px;
    margin-bottom: 25px;
  }
</style>
