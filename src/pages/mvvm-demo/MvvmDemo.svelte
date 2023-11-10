<script lang="ts">
  import { navigate } from "svelte-navigator";
  import MvvmDemoViewModel from "./MvvmDemo.ViewModel";
    import { onMount } from "svelte";

  // view model is initated here
  // in some cases when there are query parameters
  // or props, these can be passed to constructor
  // of the view model
  const _viewModel = new MvvmDemoViewModel();

  // observable properties
  let products = _viewModel.products;  
  let singleProduct = _viewModel.singleProduct;

  // refresh products when component is mounted
  onMount(() => {
    _viewModel.refreshProducts();
  });

</script>

<div class="container my-5">
  <h1>{_viewModel.title}</h1>
  <p>{_viewModel.description}</p>

  <h2 class="mt-4">List of Products</h2>

  {#if $products}
    {#each $products as product}
      <button class="btn btn-secondary me-2 my-2" on:click={() => _viewModel.setSelectedProductIndex(product.id)}>{product.title}</button>
    {/each}
  {/if}

  <h2 class="mt-4">Single Product</h2>
  <div>{$singleProduct?.title ?? 'No product selected'}</div>

  <button class="btn btn-danger mt-2" on:click={() => _viewModel.removeProduct()}>Remove Selected Product</button>

  <br/>

  <button class="btn btn-link mt-2" on:click={() => navigate(-1)}>Go Back</button>
</div>
