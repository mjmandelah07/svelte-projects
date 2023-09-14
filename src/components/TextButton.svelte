<script>
  import { createEventDispatcher } from "svelte";

  export let selectedValues;

  let texts = [
    "Adventurous",
    "Clean",
    "Good Listener",
    "Honest",
    "Inspiring",
    "Thoughtful",
    "Knowledgable",
    "Talkative",
    "Kind",
    "Trustworthy",
  ];

  let isSelected = new Array(texts.length).fill(false);

  const dispatch = createEventDispatcher();

  // Initialize the selectedValues array with the default selected values
  $: {
    selectedValues = texts.filter((text, i) => isSelected[i]);
  }

  const handleLabelClick = (index) => {
    isSelected[index] = !isSelected[index];

    // Update the selectedValues array based on the isSelected state
    selectedValues = texts.filter((text, i) => isSelected[i]);

    // Emit a custom event with the updated selectedValues
    dispatch("updateSelectedValues", selectedValues);
  };
</script>

<section class="praise section">
  <h2>Praise</h2>
  <p>What traits best describe Trausti?</p>
  <div class="praise-list">
    {#each texts as text, i}
      <div>
        <label class:selected={isSelected[i]}>
          <input
            type="radio"
            name="selectedValues"
            value={text}
            bind:group={selectedValues}
            on:change={() => handleLabelClick(i)}
          />
          {text}
        </label>
      </div>
    {/each}
  </div>
</section>

<style>
  .praise-list {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
  }

  label {
    display: block;
    margin: 10px 10px 10px 0;
    cursor: pointer;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 40px;
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  .selected {
    background-color: #81b581;
  }
</style>
