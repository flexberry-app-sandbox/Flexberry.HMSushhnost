import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-m-sushhnost-показания-пр', 'Unit | Model | i-i-s-h-m-sushhnost-показания-пр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-h-m-sushhnost-здание',
    'model:i-i-s-h-m-sushhnost-н-с',
    'model:i-i-s-h-m-sushhnost-показания-пр',
    'model:i-i-s-h-m-sushhnost-прибор-учёта',
    'model:i-i-s-h-m-sushhnost-приборы-зд',
    'model:i-i-s-h-m-sushhnost-человек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
