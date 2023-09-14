import { writable } from "svelte/store";

// Initialize the feedback data as an empty array or retrieve it from local storage
const savedData = localStorage.getItem("feedbackData");
const initialFeedbackData = savedData ? JSON.parse(savedData) : [];

// Create a writable store that automatically syncs with local storage
export const feedbackStore = writable(initialFeedbackData);

// Subscribe to changes in the store and update local storage accordingly
feedbackStore.subscribe(($feedbackStore) => {
  localStorage.setItem("feedbackData", JSON.stringify($feedbackStore));
});
