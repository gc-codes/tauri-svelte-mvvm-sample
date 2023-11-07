<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import HomePage from "./pages/home-page/HomePage.svelte";
  import AboutTauri from "./pages/about-tauri/AboutTauri.svelte";
    import MvvmDemo from "./pages/mvvm-demo/MvvmDemo.svelte";

  export let url = "/" ;
</script>

<main class="container">
  <Router {url}>
    <Route path="/" component={HomePage} />
    <Route path="/about-tauri" component={AboutTauri} />
    <Route path="/mvvm-demo" component={MvvmDemo}/>
  </Router>
</main>

<style>
  
</style>