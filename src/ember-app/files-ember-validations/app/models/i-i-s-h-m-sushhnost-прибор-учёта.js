import {
  defineNamespace,
  defineProjections,
  Model as ПриборУчётаMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-прибор-учёта';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриборУчётаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
