<script>
  import Switch from "../../common/Switch.svelte";
  import { onMount } from "svelte";
  export let isChecked;
  let checkmark;
  onMount(() => {
    checkmark = isChecked ? "[✓]" : "[✗]";
  });

  let toggle = () => {
    isChecked = !isChecked;
    checkmark = isChecked ? "[✓]" : "[✗]";
  };
</script>

<p on:click={toggle}>Should the exam be public: <b>{checkmark}</b></p>

<style>
  p {
    cursor: pointer;
    font-size: 16px;
    text-decoration-color: rgba(255, 255, 255, 0);
    transition: 0.3s;
    text-decoration-line: underline;
  }

  p:hover {
    text-decoration-color: rgba(255, 255, 255, 0.5);
  }
</style>
