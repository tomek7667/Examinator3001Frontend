<script>
  import { register } from "../common/api";

  let handleRegister = async () => {
    isLoading = true;
    let response = await register(username, password);
    if (response.ok) {
      isLogged = true;
      // Assign cookie to token
      document.cookie = "token=" + response.data.token;
    }
    isLoading = false;
  };

  export let username;
  export let password;
  export let isLoading;
  export let isLogged;

  let passwordConfirmation = "";
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
