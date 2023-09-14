<script>
  export let rating;
  import { createEventDispatcher } from "svelte";

  let stars = [1, 2, 3, 4, 5];

  const dispatch = createEventDispatcher();

  const handleRatingChange = (value) => {
    // Check if the clicked star is to the left of the current rating
    if (value < rating) {
      // Deselect the ones to the right
      dispatch("updateRating", value);
    } else {
      // Select the clicked star and ones to the left
      dispatch("updateRating", value);
    }
  };
</script>

<section class="Safety V">
  <h2>Safety</h2>
  <p>How safe did you feel with Traust?</p>
  <div class="star-container">
    {#each stars as star}
      <input
        type="radio"
        id={`star-${star}`}
        name="rating"
        value={star}
        bind:group={rating}
        on:change={() => handleRatingChange(star)}
      />
      <label
        for={`star-${star}`}
        class="star-label"
        class:checked={rating >= star}
      >
        &#9733; 
      </label>
    {/each}
  </div>
</section>

<style>
  /* Style for the star labels */
  .star-label {
    font-size: 54px;
    cursor: pointer;
    transition: color 0.3s;
    display: inline-block;
    color: #ccc; /* Default star color */
  }

  /* Style for the selected star and stars to the left */
  .star-label.checked {
    color: #f8d64e; /* Selected star color */
  }

  /* Hide the radio buttons */
  input[type="radio"] {
    display: none;
  }

  /* Hover effect */
  .star-label:hover {
    color: #f8d64e;
  }
</style>
