<script lang="ts">
  import { navigate } from "svelte-navigator";
  import _viewModel from "./MvvmDemo.ViewModel";

  let products = _viewModel.getAllProducts();
</script>

<div class="container my-5">
  <h1>{_viewModel.title}</h1>
  <p>{_viewModel.description}</p>

  <h2 class="mt-4">List of Products</h2>

  {#each $products as product}
    <div>{product.title}</div>
  {/each}

  <button class="btn btn-link" on:click={() => navigate(-1)}>Go Back</button>
</div>