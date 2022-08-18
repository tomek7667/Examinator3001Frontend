<script>
  import { onMount } from "svelte";
  import { notifications } from "../common/notifications/notifications";
  import { register } from "../common/api";

  let fired = false;

  let handleRegister = async () => {
    if (isLoading) return;
    if (username === "" || password === "" || passwordConfirmation === "") {
      notifications.warning("Please fill in all the blanks", 3000);
      return;
    }

    isLoading = true;
    let response = await register(username, password);
    if (response.success) {
      isLogged = true;
      document.cookie = "token=" + response.token;
      notifications.success("Registered successfully", 3000);
    } else {
      notifications.danger(response.message, 4000);
    }
    isLoading = false;
  };

  export let username;
  export let password;
  export let isLoading;
  export let isLogged;
  export let passwordConfirmation;

  onMount(() => {
    window.onkeydown = function (e) {
      if (!fired) {
        if (e.key === "Enter") {
          fired = true;
          handleRegister();
        }
      }
    };
    window.onkeyup = function () {
      fired = false;
    };
  });
</script>

<!-- Login box -->
<div>
  <input type="login" placeholder="Username" bind:value={username} />
  <br />
  <input type="password" placeholder="Password" bind:value={password} />
  <br />
  {#if password != passwordConfirmation}
    <div style="color: red;">Passwords do not match</div>
  {/if}
  <input
    type="password"
    placeholder="Password confirmation"
    bind:value={passwordConfirmation}
  />
  <br />
  <button on:click={handleRegister}>Register</button>
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
