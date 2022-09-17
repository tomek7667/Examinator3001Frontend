<script>
  import Footer from "./lib/common/Footer.svelte";
  import LoginBox from "./lib/login/LoginBox.svelte";
  import RegisterBox from "./lib/login/RegisterBox.svelte";
  import Loading from "./lib/common/Loading.svelte";
  import WantLogin from "./lib/login/WantLogin.svelte";
  import Toast from "./lib/common/notifications/Toast.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import Home from "./lib/home/Home.svelte";
  import { onMount } from "svelte";
  import { verify, getCookie } from "./lib/common/api";

  let isLoading = true;
  let wantLogin = true;
  let isLogged = false;

  let username = "";
  let password = "";
  let passwordConfirmation = "";

  onMount(async () => {
    // Get token based on cookie then change isLogged variable
    isLoading = true;
    let token = getCookie("token");
    if (token) {
      verify()
        .then((response) => {
          if (response.success) {
            isLogged = true;
            username = response.username;
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
{:else if !isLogged}
  <main>
    <h1>Examinator 3001</h1>
    {#if wantLogin}
      <LoginBox bind:username bind:password bind:isLoading bind:isLogged />
    {:else}
      <RegisterBox
        bind:username
        bind:password
        bind:isLoading
        bind:isLogged
        bind:passwordConfirmation
      />
    {/if}
    <WantLogin bind:wantLogin />
    <Footer />
  </main>
  <Toast />
{:else}
  <Home bind:isLoading bind:username />
  <Toast />
{/if}
<SvelteToast />
