import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dateTime: DS.attr('date'),
  id: DS.attr('number'),
  name: DS.attr('i-i-s-h-m-sushhnost-типы-н-с'),
  приборыЗд: DS.belongsTo('i-i-s-h-m-sushhnost-приборы-зд', { inverse: null, async: false })
});

export let ValidationRules = {
  dateTime: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-н-с.validations.dateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-н-с.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-н-с.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  приборыЗд: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-н-с.validations.приборыЗд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НСE', 'i-i-s-h-m-sushhnost-н-с', {
    id: attr('Id', { index: 0 }),
    dateTime: attr('Date time', { index: 1 }),
    name: attr('Name', { index: 2 }),
    приборыЗд: belongsTo('i-i-s-h-m-sushhnost-приборы-зд', 'Приборы зд', {
      id: attr('Id', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'id' })
  });

  modelClass.defineProjection('НСL', 'i-i-s-h-m-sushhnost-н-с', {
    id: attr('Id', { index: 0 }),
    dateTime: attr('Date time', { index: 1 }),
    name: attr('Name', { index: 2 }),
    приборыЗд: belongsTo('i-i-s-h-m-sushhnost-приборы-зд', 'Id', {
      id: attr('Id', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
