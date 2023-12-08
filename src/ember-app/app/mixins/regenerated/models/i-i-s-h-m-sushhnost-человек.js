import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number')
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-h-m-sushhnost-человек.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧеловекE', 'i-i-s-h-m-sushhnost-человек', {
    id: attr('Id', { index: 0 })
  });

  modelClass.defineProjection('ЧеловекL', 'i-i-s-h-m-sushhnost-человек', {
    id: attr('Id', { index: 0 })
  });
};
