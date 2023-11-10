import { BehaviorSubject, combineLatest, map, switchMap } from "rxjs";
import { dbCollections } from "../../lib/database/db";
import productsService from "../../lib/services/products.service";

class MvvmDemoViewModel {
  // constant properties
  // -------------------
  get title() {
    return 'MVVM Demo' 
  };

  get description() {
    return 'This is a demo of the MVVM pattern in Tauri + Svelte.' 
  };

  // dependent properties
  // --------------------
  // this will not directly be exposed but will help
  // in creating the other properties, here this helps
  // in creating `singleProduct` property
  selectedProductIndex = new BehaviorSubject(0);

  // observable properties
  // ---------------------

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

  // methods
  // -------

  /**
   * Refreshes the products list from api
   */
  refreshProducts = async () => {
    // fetch latest products list from api
    const data = await productsService.getProducts();

    // update the database
    await dbCollections.products.bulkInsert(data.products);
  }

  /**
   * selects active product
   * @param id product id of the product to be selected
   */
  setSelectedProductIndex = (id: number) => {
    this.selectedProductIndex.next(id);
  }

  /**
   * removes the selected product from database
   */
  removeProduct = async () => {
    try {
      const id = this.selectedProductIndex.getValue();

      // call the api to remove product
      await productsService.removeProductById(id);

      // remove from database
      await dbCollections.products.findOne({ selector: { id } }).remove();
    } catch (error) {
      
    }
  };
}

export default MvvmDemoViewModel;