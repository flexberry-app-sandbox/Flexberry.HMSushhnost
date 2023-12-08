import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  name: DS.attr('string'),
  человек: DS.belongsTo('i-i-s-h-m-sushhnost-человек', { inverse: null, async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-здание.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-здание.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  человек: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-здание.validations.человек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-h-m-sushhnost-здание', {
    id: attr('Id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    человек: belongsTo('i-i-s-h-m-sushhnost-человек', 'Человек', {
      id: attr('Id', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'id' })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-h-m-sushhnost-здание', {
    id: attr('Id', { index: 0 }),
    name: attr('Name', { index: 1 }),
    человек: belongsTo('i-i-s-h-m-sushhnost-человек', 'Id', {
      id: attr('Id', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
