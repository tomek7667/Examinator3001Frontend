<script>
  import { changePassword } from "../../common/api";
  import {
    successToast,
    errorToast,
  } from "../../common/notifications/theme.js";

  let oldPassword = "";
  let newPassword = "";
  let passwordConfirmation = "";

  let onChangePasswordClick = () => {
    if (newPassword !== passwordConfirmation) {
      errorToast("New passwords do not match");
      return;
    }
    if (oldPassword === newPassword) {
      errorToast("New password cannot be the same as old password");
      return;
    }
    changePassword(oldPassword, newPassword)
      .then((response) => {
        if (response.success) {
          // toast.success("Password changed successfully");
          successToast("Password changed successfully");
          oldPassword = "";
          newPassword = "";
          passwordConfirmation = "";
        } else {
          errorToast(response.message);
        }
      })
      .catch((error) => {
        successToast(error.message);
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
