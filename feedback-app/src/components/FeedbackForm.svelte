<script>
  import { feedbackStore } from "../FeedbackStrore";
  import { v4 as uuidv4 } from "uuid";
  import StarButton from "./StarButton.svelte";
  import ThumbButton from "./ThumbButton.svelte";
  import TextButton from "./TextButton.svelte";

  let submitDisabled = true;
  let thumbRating = null;
  let rating = 0;
  let selectedValues = [];
  let textFeedback = "";
  let validationError = "";

  // Use a reactive statement to compute the submitDisabled variable
  $: {
    submitDisabled =
      rating === 0 ||
      thumbRating === null ||
      selectedValues.length === 0 ||
      textFeedback.trim().split(/\s+/).length < 10;
  }

  const handleUserAnswerUpdate = (e) => {
    // Only update thumbRating if the form is submitted
    thumbRating = e.detail;
    console.log("Thumb Rating:", thumbRating);
  };

  const handleUserRating = (e) => {
    rating = e.detail;
    console.log("Rating:", rating);
  };

  const handleUpdateSelectedValues = (e) => {
    // Only update selectedValues if the form is submitted
    selectedValues = e.detail;
    console.log("Selected Values:", selectedValues);
  };

  const submitFeedback = (event) => {
    event.preventDefault();
    // Validate textFeedback
    if (textFeedback.trim().split(/\s+/).length > 100) {
      validationError = "Feedback should not exceed 100 words.";
      return;
    }

    // Object to store the collected data
    const feedbackItem = {
      id: uuidv4(),
      rating: rating,
      thumbRating: thumbRating,
      praise: selectedValues,
      textFeedback: textFeedback,
    };
    console.log(feedbackItem);

    feedbackStore.update((data) => [feedbackItem, ...data]);

    // Clear form values after submission
    rating = 0;
    thumbRating = null;
    selectedValues = [];
    textFeedback = "";
  };

  // Function to clear validation error
  const clearValidationError = () => {
    validationError = "";
  };
</script>
<main>
  <h1>Leave a review</h1>
<form on:submit|preventDefault={submitFeedback}>
  <StarButton bind:rating on:updateRating={handleUserRating} />

  <ThumbButton
    bind:userAnswer={thumbRating}
    on:update={handleUserAnswerUpdate}
  />
  <TextButton
    bind:selectedValues
    on:updateSelectedValues={handleUpdateSelectedValues}
  />

  <section class="share-more section">
    <h2>Care to share more?</h2>
    <p>
      How was your overall experience? What's that one thing you won't forget
      Trausti for?
    </p>
    <div class="text-area mb-3">
      <textarea
        bind:value={textFeedback}
        placeholder="Enter additional feedback..."
        on:input={clearValidationError}
        class="form-control"
        rows="10"
      />
    </div>

    <!-- Display validation error if present -->
    {#if validationError}
      <p class="error">{validationError}</p>
    {/if}
  </section>

  <div class="publish">
    <button
      type="submit"
      class="btn btn-primary w-100 p-2"
      disabled={submitDisabled}>PUBLISH REVIEW</button
    >
  </div>
</form>

</main>


<style>
  h1 {
    color: #1d0c06;
    font-size: 2em;
    padding: 10px 0 0 0;
    font-weight: 500;
  }
  .error {
    color: red;
  }
  .publish {
    font-size: 15px;
    width: 100%;
    text-align: left;
    line-height: 1.6;
    padding: 20px 0;
  }
   main {
    text-align: left;
    max-width: 93%;
    margin: 5px auto;
    padding: 0.5em 0;
  }

  @media (min-width: 640px) {
     main {
      max-width: 500px;
      margin: 10px auto;
      height: 100%;
    }
    h1 {
      font-size: 3em;
    }
  }
</style>
