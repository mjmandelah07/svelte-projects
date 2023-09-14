<script>
  import { feedbackStore } from "../FeedbackStrore";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

<div class="row">
  {#each $feedbackStore as fb (fb.id)}
    <div in:scale out:fade={{ duration: 500 }} class="col-lg-3 col-md-6 p-1" id="col">
      <FeedbackItem item={fb} />
    </div>
  {/each}
</div>

<style>
  @media (min-width: 640px) {
    .row {
     height: 500px;   
    }
   
  }
</style>
