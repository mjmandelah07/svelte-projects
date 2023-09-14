<script>
  import { Router, Route, Link } from "svelte-routing";
  import Answer from "./components/Answer.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import Home from "./components/Home.svelte";
</script>

<Router>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">aramid</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            <Link class="nav-link" to="/feedback">Feedback</Link>
            <Link class="nav-link" to="/answers">Answers</Link>
          </div>
        </div>
      </div>
    </nav>

    <Route path="/"><Home /></Route>
    <Route path="feedback">
      <FeedbackForm />
    </Route>
    <Route path="answers">
      <Answer />
    </Route>
  </div>
</Router>

<style>
  .container {
    width: 100%;
    height: 100%;
  }
</style>
