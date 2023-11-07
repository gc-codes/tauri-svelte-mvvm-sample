import { toTypedRxJsonSchema, type ExtractDocumentTypeFromTypedRxJsonSchema, type RxJsonSchema } from "rxdb";

export const productSchemaLiteral = {
  title: 'product',
  primaryKey: 'id',
  type: 'object',
  version: 0,
  properties: {
    id: {
      type: 'number'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'number'
    }
  }
} as const;

const schemaTyped = toTypedRxJsonSchema(productSchemaLiteral);

export type ProductDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;

export const productSchema: RxJsonSchema<ProductDocType> = productSchemaLiteral;