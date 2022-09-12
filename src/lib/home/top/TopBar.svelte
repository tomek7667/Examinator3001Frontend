<script>
  import TopBarElement from "./TopBarElement.svelte";
  import { routeNames } from "../../common/routes.js";

  export let route;
</script>

<div class="top">
  {#each routeNames as routeName}
    <TopBarElement bind:route buttonName={routeName} />
  {/each}
  <TopBarElement bind:route buttonName="Logout" isLogOut={true} />
</div>

<style>
  .top {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #1e1e1e;
    height: 45px;
    width: 100%;
    padding: 0px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .top::-webkit-scrollbar {
    display: none;
  }
</style>
