import { createRxDatabase, type RxCollection, type RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { productSchema, type ProductDocType } from '../models/product.model';

// define all the Rx collections
export type ProductCollection = RxCollection<ProductDocType>;

// collate all the Rx collections
export type DatabaseCollections = {
  products: ProductCollection;
};

// define the Rx database type
export type DatabaseType = RxDatabase<DatabaseCollections>;

// create the Rx database
const db: DatabaseType = await createRxDatabase<DatabaseCollections>({
  name: 'mydatabase',
  storage: getRxStorageDexie()
});

// add all collections
await db.addCollections({
  products: {
    schema: productSchema
  }
});

export const dbCollections = db.collections;