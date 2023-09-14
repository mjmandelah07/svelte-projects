<script>
  import { feedbackStore } from "../FeedbackStrore";
  import Card from "./Card.svelte";
  export let item;

  function handleDelete(itemId) {
    feedbackStore.update((currentFeedback) => {
      const updatedFeedback = currentFeedback.filter(
        (data) => data.id !== itemId
      );

      // Update local storage with the updated feedback data
      localStorage.setItem("feedbackData", JSON.stringify(updatedFeedback));

      return updatedFeedback;
    });
  }

  let thumb = item.thumbRating;
  let rating = item.rating;
  let text = item.textFeedback;
  let praises = item.praise;
</script>

<Card>
  <div class="card-body">
    <div class="praise">
      {#each praises as praise, i}
        <div class="praise-item bg-primary-subtle">{praise}</div>
      {/each}
    </div>
    <p class="card-text">{text}</p>
    <div class="d-flex justify-content-between">
      <span class="bg-success">Rating: {rating}</span>
      <button class="delete-icon" on:click={() => handleDelete(item.id)}
        >&#10006;</button
      >
    </div>
  </div>
   <img
    src={thumb === "yes"
      ? "./thumb-up.png"
      : "./thumb-down.png"}
    class="card-img-top"
    alt={thumb}
  />
  </Card
>

<style>
  .praise {
    display: flex;
    flex-wrap: wrap;
  }

  .praise-item {
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px;
  }

  span{
    border-radius: 5px;
    padding: 10px;
  }
  /* Styling for the delete icon */
  .delete-icon {
    position: absolute;
    top: 8px;
    right: 5px;
    cursor: pointer;
    color: red;
    float: right;
    background: none;
    border: none;
  }
</style>
