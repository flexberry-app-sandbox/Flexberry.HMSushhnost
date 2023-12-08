import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЧеловекMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-человек';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЧеловекMixin, Validations, {
});

defineProjections(Model);

export default Model;
