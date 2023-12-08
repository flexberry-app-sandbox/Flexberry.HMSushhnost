import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  mmax: DS.attr('decimal'),
  mmin: DS.attr('decimal'),
  pmax: DS.attr('decimal'),
  privM: DS.attr('boolean'),
  privP: DS.attr('boolean'),
  privT: DS.attr('boolean'),
  tmax: DS.attr('decimal'),
  tmin: DS.attr('decimal'),
  urovZar: DS.attr('decimal'),
  здание: DS.belongsTo('i-i-s-h-m-sushhnost-здание', { inverse: null, async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  mmax: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.mmax.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  mmin: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.mmin.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  pmax: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.pmax.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  privM: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.privM.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  privP: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.privP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  privT: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.privT.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tmax: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.tmax.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  tmin: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.tmin.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  urovZar: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.urovZar.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  здание: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-приборы-зд.validations.здание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриборыЗдE', 'i-i-s-h-m-sushhnost-приборы-зд', {
    id: attr('Id', { index: 0 }),
    mmax: attr('Mmax', { index: 1 }),
    mmin: attr('Mmin', { index: 2 }),
    tmax: attr('Tmax', { index: 3 }),
    tmin: attr('Tmin', { index: 4 }),
    pmax: attr('Pmax', { index: 5 }),
    urovZar: attr('Urov zar', { index: 6 }),
    privT: attr('Priv T', { index: 7 }),
    privP: attr('Priv P', { index: 8 }),
    privM: attr('Priv M', { index: 9 }),
    здание: belongsTo('i-i-s-h-m-sushhnost-здание', 'Здание', {
      name: attr('Name', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ПриборыЗдL', 'i-i-s-h-m-sushhnost-приборы-зд', {
    id: attr('Id', { index: 0 }),
    mmax: attr('Mmax', { index: 1 }),
    mmin: attr('Mmin', { index: 2 }),
    tmax: attr('Tmax', { index: 3 }),
    tmin: attr('Tmin', { index: 4 }),
    pmax: attr('Pmax', { index: 5 }),
    urovZar: attr('Urov zar', { index: 6 }),
    privT: attr('Priv T', { index: 7 }),
    privP: attr('Priv P', { index: 8 }),
    privM: attr('Priv M', { index: 9 }),
    здание: belongsTo('i-i-s-h-m-sushhnost-здание', 'Name', {
      name: attr('Name', { index: 10 })
    }, { index: -1, hidden: true })
  });
};
