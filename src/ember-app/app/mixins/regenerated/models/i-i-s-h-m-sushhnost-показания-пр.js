import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dateTime: DS.attr('date'),
  id: DS.attr('number'),
  m: DS.attr('decimal'),
  p: DS.attr('decimal'),
  q: DS.attr('boolean'),
  t: DS.attr('decimal'),
  приборыЗд: DS.belongsTo('i-i-s-h-m-sushhnost-приборы-зд', { inverse: null, async: false })
});

export let ValidationRules = {
  dateTime: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-показания-пр.validations.dateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  id: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-показания-пр.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  m: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-показания-пр.validations.m.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  p: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-показания-пр.validations.p.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  q: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-показания-пр.validations.q.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  t: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-показания-пр.validations.t.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  приборыЗд: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-показания-пр.validations.приборыЗд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоказанияПрE', 'i-i-s-h-m-sushhnost-показания-пр', {
    id: attr('Id', { index: 0 }),
    dateTime: attr('Date time', { index: 1 }),
    t: attr('T', { index: 2 }),
    p: attr('P', { index: 3 }),
    m: attr('M', { index: 4 }),
    q: attr('Q', { index: 5 }),
    приборыЗд: belongsTo('i-i-s-h-m-sushhnost-приборы-зд', 'Приборы зд', {
      id: attr('Id', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'id' })
  });

  modelClass.defineProjection('ПоказанияПрL', 'i-i-s-h-m-sushhnost-показания-пр', {
    id: attr('Id', { index: 0 }),
    dateTime: attr('Date time', { index: 1 }),
    t: attr('T', { index: 2 }),
    p: attr('P', { index: 3 }),
    m: attr('M', { index: 4 }),
    q: attr('Q', { index: 5 }),
    приборыЗд: belongsTo('i-i-s-h-m-sushhnost-приборы-зд', 'Id', {
      id: attr('Id', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
