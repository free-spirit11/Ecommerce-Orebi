import { type SchemaTypeDefinition } from 'sanity';
import banner from './banner';
import product from './product';
import category from './category';
import blockContent from './blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, product, category, blockContent],
};
