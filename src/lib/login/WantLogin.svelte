<script>
  export let wantLogin;
</script>

<br />
<div>
  Do you want to login? <input type="checkbox" bind:checked={wantLogin} />
</div>

<style>
  input[type="checkbox"] {
    width: 2em;
    height: 2em;
    vertical-align: middle;
    margin-right: 0.5em;
  }
</style>
