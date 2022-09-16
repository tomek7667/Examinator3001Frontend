<script>
  import ExamCreator from "./exam_creator/ExamCreator.svelte";
  import RawEditor from "./raw_editor/RawEditor.svelte";
  import PublicMark from "./PublicMark.svelte";
  import Switch from "../../common/Switch.svelte";
  import {
    successToast,
    errorToast,
  } from "../../common/notifications/theme.js";
  import { createExam, getCookie } from "../../common/api.js";
  import { onMount } from "svelte";
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

  let createExamButton = () => {
    if (examData.questions.length === 0) {
      errorToast("Exam must have at least one question");
      return;
    } else if (examData.name === "") {
      errorToast("Exam must have a name");
      return;
    } else {
      createExam(examData, getCookie("token")).then((res) => {
        if (res.success) {
          successToast(res.message);
        } else {
          errorToast(res.message);
        }
      });
    }
  };
</script>

<div class="editorWrapper">
  <p class="switchModes" on:click={switchModes}>
    I want to use <b>{message}</b><br />
    <Switch bind:checked={wantExamCreator} bind:onCheck={switchModes} />
  </p>
  <input type="text" placeholder="Exam name" bind:value={examData.name} />
  <PublicMark bind:isChecked={examData.isPublic} />
  <hr />
  {#if wantExamCreator}
    <ExamCreator bind:examData />
  {:else}
    <RawEditor bind:examData bind:canParse />
  {/if}
  <hr />
  <button on:click={createExamButton}>Create exam</button>
</div>

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
    height: 600px;
    margin-right: 20px;
    margin-bottom: 25px;
  }
</style>
