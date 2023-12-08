import {
  defineNamespace,
  defineProjections,
  Model as ПриборыЗдMixin
} from '../mixins/regenerated/models/i-i-s-h-m-sushhnost-приборы-зд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриборыЗдMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
