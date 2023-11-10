<script lang="ts">
  import { navigate } from "svelte-navigator";
  import AboutTauriViewModel from "./AboutTauri.ViewModel";
  
  const _viewModel = new AboutTauriViewModel();
  
</script>

<div class="container my-5">
  <h1>{_viewModel.title}</h1>
  <p>{_viewModel.description}</p>

  <button class="btn btn-link" on:click={() => navigate(-1)}>Go Back</button>
</div>