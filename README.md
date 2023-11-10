# Tauri + Svelte + MVVM + Offline First Architecture

This template should help get you started developing with Tauri, Svelte while taking care of basic things like following:
- Support for a local database (RxDB)
- Service layer to call APIs
- A reactive MVVM architecture (powered by RxJS and RxDB)
- Bootstrap support

## Folder Structure

``` 
public/
src/
├─ lib/
│  ├─ database/
│  ├─ models/
│  │  ├─ product.model.ts
│  ├─ services/
│  │  ├─ products.service.ts
├─ pages/
│  ├─ about-tauri/
│  │  ├─ AboutTauri.svelte
│  │  ├─ AboutTauri.ViewModel.ts
│  ├─ home-page/
│  ├─ mvvm-demo/
├─ styles/
src-tauri/

```

1. `lib` folder contains `database`, `models` and `services` folders.
2. `pages` folder contains all the pages of the application.
3. Every page consist of two files, one is `svelte` file which majorly contains the html component and `*.ViewModel.ts` file which contains the logic of the page.

## View Model structure
The view model consists of all the primary logic which governs the page. Objective is to keep the page as light as possible and move all the logic to the view model layer.

Following are the components of the view model (refer to `MvvmDemo.ViewModel.ts` file for reference):

1. **Constant Properties** - Value of these properties will not change in the page.

```typescript
get title() {
  return 'MVVM Demo';
}

get description() {
  return 'This is a demo page to showcase the MVVM architecture.';
}
```

2. **Observable Properties** - Value of these properties are directly connected with `RxDB`. There are two types of observable properties, one whose value will not require any change and second whose value may change with time.

```typescript
// directly attached to database
get products() {
  return dbCollections.products.find().$;
};

// attached to database as well as
// derived from other properties
// here, it is recalculated whenever `selectedProductIndex` changes
get singleProduct() {    
  return this.selectedProductIndex
    .pipe(switchMap(id => dbCollections.products.findOne({ selector: { id } }).$));
};
```

3. **Methods** - These are the methods which are called from the page to change state.

## Achieving Offline First Approach
For creating offline first application, we just need to follow one simple rule, 

**Always Fetch Data From Local Database**

If the data is not available in the local database, then fetch it from the server and save it in the local database. And then fetch it from the local database.

We simplify the last part by using a reactive database like `RxDB` which automatically updates the state of the app if the database is updated by exposing the data as `observable`.

### Example
In the sample, we fetch list of products in `MvvmDemo` page.
In the view model, following line of codes help in fetching the data from the database.

```typescript
get products() {
  return dbCollections.products.find().$;
};
```

The `RxDB` database exposes an observable when suffix `.$` is used with any query. Please refer to [their official documentation](https://rxdb.info/rx-query.html) for more details.

Svelte has a very powerful and easy to use reactive syntax which can directly update the view when database is updated once we use observable.

```svelte
{#each $products as product}
  <button class="btn btn-secondary me-2 my-2" on:click={() => _viewModel.setSelectedProductIndex(product.id)}>{product.title}</button>
{/each}
```

The `products` variable is updated automatically when we do any operation, example, delete an object from the database.

Another important thing is updating data from API, for that we are using `refreshProducts` method which is called at page load. It is important to separate out the reads and writes and having two separate ways to do that.

Another instance is when we are removing product, we have `removeProduct` function in viewmodel. Once the product is removed, `products` variable is updated automatically and the view is updated.

**Dependent Properties**

Sometimes the property value might be dependent on some other parameter and is expected to change overtime. In that case, we can use `switchMap` from `RxJS` operator to update the value of the property.

Refer to `singleProduct` property in `MvvmDemo.ViewModel.ts` file for reference.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).
