<script>
  import { notifications } from "../../common/notifications/notifications";
  import { getCookie, changePassword } from "../../common/api";

  let oldPassword = "";
  let newPassword = "";
  let passwordConfirmation = "";

  let onChangePasswordClick = () => {
    changePassword(oldPassword, newPassword, getCookie("token"))
      .then((response) => {
        if (response.success) {
          notifications.success("Password changed successfully", 3000);
          oldPassword = "";
          newPassword = "";
          passwordConfirmation = "";
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
  <h4>Change your password</h4>
  <input type="password" placeholder="Old password" bind:value={oldPassword} />
  <br />
  <input type="password" placeholder="New password" bind:value={newPassword} />
  <br />
  <input
    type="password"
    placeholder="Confirm new password"
    bind:value={passwordConfirmation}
  />
  <br /><br />
  <button on:click={onChangePasswordClick}>Change password</button>
</div>
