import { Serializer as ЧеловекSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-m-sushhnost-человек';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЧеловекSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
