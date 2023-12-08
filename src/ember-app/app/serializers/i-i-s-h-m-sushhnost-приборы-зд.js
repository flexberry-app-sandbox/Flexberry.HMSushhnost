import { Serializer as ПриборыЗдSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-m-sushhnost-приборы-зд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриборыЗдSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
