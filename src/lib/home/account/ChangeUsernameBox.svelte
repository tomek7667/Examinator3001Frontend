<script>
  import { notifications } from "../../common/notifications/notifications";
  import { getCookie, changeUsername } from "../../common/api";

  export let username;
  let newUsername = username;

  let onChangeUsernameClick = () => {
    changeUsername(newUsername, getCookie("token"))
      .then((response) => {
        if (response.success) {
          notifications.success("Username changed successfully", 3000);
          username = newUsername;
        } else {
          notifications.error(response.message, 3000);
        }
      })
      .catch((error) => {
        notifications.error(error.message, 3000);
      });
  };
</script>

<div>
  <h4>Change your username</h4>
  <input type="login" placeholder="New username" bind:value={newUsername} />
  <br /><br />
  <button on:click={onChangeUsernameClick}>Change username</button>
</div>
