import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-m-sushhnost-прибор-учёта', 'Unit | Serializer | i-i-s-h-m-sushhnost-прибор-учёта', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-h-m-sushhnost-прибор-учёта',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-h-m-sushhnost-типы-н-с',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
