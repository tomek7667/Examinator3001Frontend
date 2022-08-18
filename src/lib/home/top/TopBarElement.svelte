<script>
  export let route;
  export let buttonName;

  let navigate = () => {
    route = buttonName;
  };
</script>

<div class="topBarElement" on:click={navigate}>
  {buttonName}
</div>

<style>
  .topBarElement {
    display: inline-block;
    padding: 10px 30px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    height: auto;
    float: right;
  }

  .topBarElement:hover {
    background-color: #fff;
    color: #1e1e1e;
  }
</style>
