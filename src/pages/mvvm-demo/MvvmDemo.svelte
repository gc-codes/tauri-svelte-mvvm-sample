<script lang="ts">
  import { navigate } from "svelte-navigator";
  import _viewModel from "./MvvmDemo.ViewModel";

  $: products = _viewModel.getProducts();

  let selectedProductIndex = 0;
  $: singleProduct = _viewModel.getSingleProduct(selectedProductIndex);

</script>

<div class="container my-5">
  <h1>{_viewModel.title}</h1>
  <p>{_viewModel.description}</p>

  <h2 class="mt-4">List of Products</h2>

  {#if $products}
    {#each $products as product}
      <button class="btn btn-secondary me-2 my-2" on:click={() => selectedProductIndex = product.id}>{product.title}</button>
    {/each}
  {/if}

  <h2 class="mt-4">Single Product</h2>
  <div>{$singleProduct?.title ?? 'No product selected'}</div>

  <button class="btn btn-danger mt-2" on:click={() => _viewModel.removeProduct(selectedProductIndex)}>Remove Selected Product</button>

  <br/>

  <button class="btn btn-link mt-2" on:click={() => navigate(-1)}>Go Back</button>
</div>
