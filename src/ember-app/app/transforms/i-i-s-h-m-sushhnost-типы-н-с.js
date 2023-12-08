import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипыНСEnum from '../enums/i-i-s-h-m-sushhnost-типы-н-с';

export default FlexberryEnum.extend({
  enum: ТипыНСEnum,
  sourceType: 'IIS.HM_Sushhnost.ТипыНС'
});
