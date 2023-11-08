<script lang="ts">
  import { navigate } from "svelte-navigator";
  import _viewModel from "./MvvmDemo.ViewModel";


  let products = _viewModel.products;
  let singleProduct = _viewModel.singleProduct;

</script>

<div class="container my-5">
  <h1>{_viewModel.title}</h1>
  <p>{_viewModel.description}</p>

  <h2 class="mt-4">List of Products</h2>

  {#if $products}
    {#each $products as product}
      <button on:click={() => _viewModel.selectProduct(product.id)}>{product.title}</button>
    {/each}
  {/if}

  <h2 class="mt-4">Single Product</h2>
  <div>{$singleProduct?.title}</div>

  <button class="btn btn-link" on:click={() => navigate(-1)}>Go Back</button>
</div>
