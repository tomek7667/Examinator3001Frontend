<script>
  import { stringifyExamData, parseExamData } from "../../../common/exam.js";
  import { onMount } from "svelte";
  export let examData;
  export let canParse;

  let stringifiedExamData = stringifyExamData(examData);
  onMount(() => {
    stringifiedExamData = stringifyExamData(examData);
  });

  let updateExamData = () => {
    console.log(stringifiedExamData);
    const parsed = parseExamData(stringifiedExamData);
    console.log(parsed);

    if (parsed) {
      examData = parsed;
      canParse = true;
    } else {
      canParse = false;
    }
  };
</script>

<div class="body">
  <p>Is parsable: <span>{canParse}</span></p>
  <textarea
    bind:value={stringifiedExamData}
    on:input={updateExamData}
    class="RawEditor"
  />
  <br />
</div>

<style>
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
  }

  .RawEditor {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    background-color: #1e1e1e;
    color: #d4d4d4;
    font-family: monospace;
    font-size: 16px;
    padding-left: 20px;
    overflow: auto;
  }

  span {
    font: 16px monospace;
  }
</style>
