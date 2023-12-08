import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПриборыЗдMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-приборы-зд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПриборыЗдMixin, Validations, {
});

defineProjections(Model);

export default Model;
