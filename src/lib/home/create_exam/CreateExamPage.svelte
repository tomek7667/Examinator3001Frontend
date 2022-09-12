<script>
  import ExamCreator from "./exam_creator/ExamCreator.svelte";
  import RawEditor from "./raw_editor/RawEditor.svelte";
  import { onMount } from "svelte";

  let message = "I want to use exam creator";
  export let wantExamCreator = true;

  let switchModes = () => {
    wantExamCreator = !wantExamCreator;
    message = wantExamCreator ? "exam creator" : "raw editor";
  };

  onMount(() => {
    message = wantExamCreator ? "exam creator" : "raw editor";
  });
</script>

<p class="switchModes" on:click={switchModes}>
  I want to use <b>{message}</b>
  <input type="checkbox" bind:checked={wantExamCreator} />
</p>
<hr />
{#if wantExamCreator}
  <ExamCreator />
{:else}
  <RawEditor />
{/if}

<style>
  input[type="checkbox"] {
    width: 2em;
    height: 2em;
    vertical-align: middle;
    margin-right: 0.5em;
  }

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
</style>
