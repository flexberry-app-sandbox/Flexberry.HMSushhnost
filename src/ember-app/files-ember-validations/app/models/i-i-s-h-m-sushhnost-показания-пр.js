import {
  defineNamespace,
  defineProjections,
  Model as ПоказанияПрMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-показания-пр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПоказанияПрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
