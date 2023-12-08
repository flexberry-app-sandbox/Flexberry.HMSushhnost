import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПриборУчётаMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-прибор-учёта';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПриборУчётаMixin, Validations, {
});

defineProjections(Model);

export default Model;
