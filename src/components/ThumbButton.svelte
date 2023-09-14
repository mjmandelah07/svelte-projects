<script>
  export let userAnswer;
  import { createEventDispatcher } from "svelte";

  let selectedAnswer = userAnswer;

  const dispatch = createEventDispatcher();

  const setUserAnswer = (answer) => {
    if (selectedAnswer === answer) {
      selectedAnswer = null;
      dispatch("update", null);
    } else {
      selectedAnswer = answer;
      dispatch("update", answer);
    }
  };
</script>

<section class="recommend section">
  <h2>Would you recommend Trausti?</h2>
  <p>Your opinion wont be posted publicly</p>
  <div class="thumbs-up-down">
    <label class:thumbs-up={selectedAnswer === "yes"}>
      <input
        type="radio"
        name="userAnswer"
        value="yes"
        checked={selectedAnswer === "yes"}
        on:change={() => setUserAnswer("yes")}
      />
      &#128077; Yes
    </label>
    <label class:thumbs-down={selectedAnswer === "no"}>
      <input
        type="radio"
        name="userAnswer"
        value="no"
        checked={selectedAnswer === "no"}
        on:change={() => setUserAnswer("no")}
      />
      &#128078; No
    </label>
  </div>
</section>

<style>
  .thumbs-up-down {
    margin-top: 20px;
  }
  .thumbs-up,
  .thumbs-down {
    cursor: pointer;
    padding: 10px;
    border: none;
    background: transparent;
    outline: none;
    transition: color 0.3s;
    display: inline-block;
  }
  input[type="radio"] {
    display: none;
  }
  .thumbs-up input,
  .thumbs-down input {
    position: absolute;
    opacity: 0;
  }

  .thumbs-up {
    font-size: 44px;
    color: #009933;
  }

  .thumbs-down {
    font-size: 44px;
    color: #ff0000;
  }

  label.thumbs-up {
    color: #118036;
  }

  label.thumbs-down {
    color: #ff0000;
  }

  label {
    background: none;
    border: none;
    font-size: 34px;
    display: inline-block;
    position: relative;
    margin-right: 25px;
  }
</style>
