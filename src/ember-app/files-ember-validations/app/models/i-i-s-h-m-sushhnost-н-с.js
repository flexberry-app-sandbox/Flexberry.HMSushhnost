import {
  defineNamespace,
  defineProjections,
  Model as НСMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-н-с';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НСMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
