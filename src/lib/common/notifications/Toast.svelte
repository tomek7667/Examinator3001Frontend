<script>
	import { flip } from "svelte/animate";
	import { fly } from "svelte/transition";
	import { notifications } from "./notifications.js";
  
	export let themes = {
	  danger: "#E26D69",
	  success: "#84C991",
	  warning: "#f0ad4e",
	  info: "#5bc0de",
	  default: "#aaaaaa",
	};
  </script>
  
  <div class="notifications">
	{#each $notifications as notification (notification.id)}
	  <div
		animate:flip
		class="toast"
		style="background: {themes[notification.type]};"
		transition:fly={{ y: 30 }}
	  >
		<div class="content">{notification.message}</div>
		{#if notification.icon}<i class={notification.icon} />{/if}
	  </div>
	{/each}
  </div>
  
  <style>
	.notifications {
	  position: fixed;
	  bottom: 10px;
	  left: 0;
	  right: 0;
	  margin: 0 auto;
	  padding: 0;
	  z-index: 9999;
	  display: flex;
	  flex-direction: column;
	  justify-content: flex-end;
	  align-items: center;
	  pointer-events: none;
	  overflow-y: hidden;
	  height: 25%;
	  opacity: 0.9;
	}
  
	.toast {
	  flex: 0 0 auto;
	  margin-bottom: 10px;
	  border-radius: 5px;
	}
  
	.content {
	  padding: 10px;
	  display: block;
	  color: white;
	  font-weight: 500;
	}
  </style>
  