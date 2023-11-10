<script lang="ts">
  import { navigate } from "svelte-navigator";
  import HomePageViewModel from "./HomePage.ViewModel";

  const _viewModel = new HomePageViewModel();

  const navigateToRoute = (route: string) => {
    navigate(route);
  }

</script>

<div class="container my-5">
  <h1>{_viewModel.title}</h1>
  <p>{_viewModel.description}</p>

  <h2 class="mt-4">Select Route</h2>
  <div class="d-flex flex-column">
    {#each _viewModel.routes as route}
      <button class="btn btn-primary mb-2" on:click={() => {navigateToRoute(route.route)}}>{route.title}</button>
    {/each}
  </div>
</div>
