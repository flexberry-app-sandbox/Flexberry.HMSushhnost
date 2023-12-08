import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  name: DS.attr('string'),
  приборыЗд: DS.belongsTo('i-i-s-h-m-sushhnost-приборы-зд', { inverse: null, async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-прибор-учёта.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-прибор-учёта.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приборыЗд: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-прибор-учёта.validations.приборыЗд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриборУчётаE', 'i-i-s-h-m-sushhnost-прибор-учёта', {
    id: attr('Id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    приборыЗд: belongsTo('i-i-s-h-m-sushhnost-приборы-зд', 'Приборы зд', {
      id: attr('Id', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'id' })
  });

  modelClass.defineProjection('ПриборУчётаL', 'i-i-s-h-m-sushhnost-прибор-учёта', {
    id: attr('Id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    приборыЗд: belongsTo('i-i-s-h-m-sushhnost-приборы-зд', 'Id', {
      id: attr('Id', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
