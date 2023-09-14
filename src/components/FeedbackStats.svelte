<script>
  import { feedbackStore } from "../FeedbackStrore";
  let count = 0;
  let average = 0;

  $: {
    const feedbackData = $feedbackStore;
    count = feedbackData.length;
    average = feedbackData.reduce((sum, { rating }) => sum + rating, 0) / count;
  }
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average.toFixed(0)}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
