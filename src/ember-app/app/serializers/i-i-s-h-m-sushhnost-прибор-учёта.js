import { Serializer as ПриборУчётаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-m-sushhnost-прибор-учёта';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриборУчётаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
