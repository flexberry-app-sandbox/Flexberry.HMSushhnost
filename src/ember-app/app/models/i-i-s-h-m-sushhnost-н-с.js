import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НСMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-н-с';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НСMixin, Validations, {
});

defineProjections(Model);

export default Model;
