<script>
  import ChangePasswordBox from "./account/ChangePasswordBox.svelte";
  import ChangeUsernameBox from "./account/ChangeUsernameBox.svelte";

  export let username;
</script>

<h2>Hello {username}!</h2>
<h3>What do you want to do?</h3>

<ChangePasswordBox />
<br />
<hr />
<ChangeUsernameBox bind:username />
