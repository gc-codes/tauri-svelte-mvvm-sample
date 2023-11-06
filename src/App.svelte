<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import HomePage from "./pages/home-page/HomePage.svelte";

  export let url = "/" ;
</script>

<main class="container">
  <Router {url}>
    <Route path="/" component={HomePage} />
  </Router>
</main>

<style>
  
</style>