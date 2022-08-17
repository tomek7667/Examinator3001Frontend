<script>
  import { onMount } from "svelte";
  import { notifications } from "../common/notifications/notifications";
  import { login } from "../common/api";

  let fired = false;

  let handleLogin = async () => {
    if (isLoading) return;
    isLoading = true;
    let response = await login(username, password);
    if (response.success) {
      isLogged = true;
      document.cookie = "token=" + response.token;
    } else {
      console.log("response:", response);
    }
    isLoading = false;
  };

  onMount(() => {
    window.onkeydown = function (e) {
      if (!fired) {
        if (e.key === "Enter") {
          fired = true;
          handleLogin();
        }
      }
    };
    window.onkeyup = function () {
      fired = false;
    };
  });

  export let username;
  export let password;
  export let isLoading;
  export let isLogged;
</script>

<!-- Login box -->
<div>
  <input type="login" placeholder="Username" bind:value={username} />
  <br />
  <input type="password" placeholder="Password" bind:value={password} />
  <br />
  <button on:click={handleLogin}>Login</button>
</div>

<style>
  input {
    width: 100%;
    height: 2em;
    border: 1px solid #ccc;
    border-radius: 0.25em;
    padding: 0.5em;
    margin-bottom: 0.5em;
  }

  input:focus {
    outline: none;
    border: 1px solid #aaa;
  }

  input::placeholder {
    color: #888;
  }

  input:disabled {
    background-color: #eee;
  }
</style>
