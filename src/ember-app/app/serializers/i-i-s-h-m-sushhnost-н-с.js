import { Serializer as НСSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-m-sushhnost-н-с';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НСSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
