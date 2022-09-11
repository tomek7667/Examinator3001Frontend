<script>
  import { getCookie, changeUsername } from "../../common/api";
  import {
    successToast,
    errorToast,
  } from "../../common/notifications/theme.js";

  export let username;
  let newUsername = username;

  let onChangeUsernameClick = () => {
    if (newUsername === username) {
      errorToast("New username cannot be the same as old username");
      return;
    }

    changeUsername(newUsername, getCookie("token"))
      .then((response) => {
        if (response.success) {
          successToast("Username changed successfully");
          username = newUsername;
          document.cookie = "token=" + response.token;
        } else {
          errorToast(response.message);
        }
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };
</script>

<div>
  <h4>Change your username</h4>
  <input type="login" placeholder="New username" bind:value={newUsername} />
  <br /><br />
  <button on:click={onChangeUsernameClick}>Change username</button>
</div>
