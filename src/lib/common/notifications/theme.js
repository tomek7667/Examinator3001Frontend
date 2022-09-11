import { toast } from "@zerodevx/svelte-toast";

export const successToast = (/** @type {string} */ m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "green",
      "--toastColor": "white",
      "--toastBarBackground": "white",
    },
  });

export const errorToast = (/** @type {string} */ m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "red",
      "--toastColor": "white",
      "--toastBarBackground": "white",
    },
  });
