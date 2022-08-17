<script>
  import Footer from "./lib/common/Footer.svelte";
  import LoginBox from "./lib/login/LoginBox.svelte";
  import RegisterBox from "./lib/login/RegisterBox.svelte";
  import Loading from "./lib/common/Loading.svelte";
  import WantLogin from "./lib/login/WantLogin.svelte";
  import { onMount } from "svelte";
  import { getCookie, verify } from "./lib/common/api";

  let isLoading = true;
  let wantLogin = true;
  let isLogged = false;

  let username = "";
  let password = "";

  onMount(() => {
    // Get token based on cookie then change isLogged variable
    let token = getCookie("token");
    if (token) {
      verify(token)
        .then((response) => {
          if (response.ok) {
            isLogged = true;
          }
        })
        .finally(() => {
          isLoading = false;
        });
    } else {
      isLoading = false;
    }
  });
</script>

{#if isLoading}
  <Loading />
{:else}
  <main>
    {#if !isLogged}
      <h1>Examinator 3001</h1>
      {#if wantLogin}
        <LoginBox bind:username bind:password bind:isLoading bind:isLogged />
      {:else}
        <RegisterBox bind:username bind:password bind:isLoading bind:isLogged />
      {/if}
      <WantLogin bind:wantLogin />
      <Footer />
    {:else}
      <h1>You are logged in as {username}</h1>
    {/if}
  </main>
{/if}
