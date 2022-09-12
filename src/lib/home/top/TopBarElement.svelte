<script>
  export let route;
  export let buttonName;
  export let isLogOut = false;

  let navigate = () => {
    route = buttonName;
  };

  let logout = () => {
    document.cookie = "token=;";
    window.location.reload();
  };
</script>

{#if !isLogOut}
  {#if route === buttonName}
    <div class="topBarElement underline">
      {buttonName}
    </div>
  {:else}
    <div class="topBarElement" on:click={navigate}>
      {buttonName}
    </div>
  {/if}
{:else}
  <div class="topBarElement logout" on:click={logout}>
    {buttonName}
  </div>
{/if}

<style>
  .topBarElement {
    display: inline-block;
    padding: 10px 30px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    height: auto;
  }

  .underline {
    border-bottom: 2px solid #fff;
  }

  .topBarElement:hover {
    background-color: #fff;
    color: #1e1e1e;
    border-bottom: 2px solid #fff;
    /* Shadow */
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }

  .logout {
    position: absolute;
    right: 20px;
  }
</style>
