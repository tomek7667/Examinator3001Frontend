<script>
  import { logout } from "../../common/api.js";
  import { onMount } from "svelte";
  export let route;
  export let buttonName;
  export let isLogOut = false;

  let navigate = () => {
    window.location.href = `/${buttonName.toLowerCase().replace(" ", "-")}`;
    route = buttonName;
  };

  onMount(() => {
    route = window.location.href.split("/")[3].replace("-", " ");
  });
</script>

{#if !isLogOut}
  {#if route === buttonName.toLowerCase()}
    <div class="topBarElement underline">
      {buttonName}
    </div>
  {:else}
    <div class="topBarElement" on:click={navigate}>
      {buttonName}
    </div>
  {/if}
{:else}
  <div class="topBarElement" on:click={logout}>
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
</style>
