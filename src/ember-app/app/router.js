import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-h-m-sushhnost-здание-l');
  this.route('i-i-s-h-m-sushhnost-здание-e',
  { path: 'i-i-s-h-m-sushhnost-здание-e/:id' });
  this.route('i-i-s-h-m-sushhnost-здание-e.new',
  { path: 'i-i-s-h-m-sushhnost-здание-e/new' });
  this.route('i-i-s-h-m-sushhnost-н-с-l');
  this.route('i-i-s-h-m-sushhnost-н-с-e',
  { path: 'i-i-s-h-m-sushhnost-н-с-e/:id' });
  this.route('i-i-s-h-m-sushhnost-н-с-e.new',
  { path: 'i-i-s-h-m-sushhnost-н-с-e/new' });
  this.route('i-i-s-h-m-sushhnost-показания-пр-l');
  this.route('i-i-s-h-m-sushhnost-показания-пр-e',
  { path: 'i-i-s-h-m-sushhnost-показания-пр-e/:id' });
  this.route('i-i-s-h-m-sushhnost-показания-пр-e.new',
  { path: 'i-i-s-h-m-sushhnost-показания-пр-e/new' });
  this.route('i-i-s-h-m-sushhnost-прибор-учёта-l');
  this.route('i-i-s-h-m-sushhnost-прибор-учёта-e',
  { path: 'i-i-s-h-m-sushhnost-прибор-учёта-e/:id' });
  this.route('i-i-s-h-m-sushhnost-прибор-учёта-e.new',
  { path: 'i-i-s-h-m-sushhnost-прибор-учёта-e/new' });
  this.route('i-i-s-h-m-sushhnost-приборы-зд-l');
  this.route('i-i-s-h-m-sushhnost-приборы-зд-e',
  { path: 'i-i-s-h-m-sushhnost-приборы-зд-e/:id' });
  this.route('i-i-s-h-m-sushhnost-приборы-зд-e.new',
  { path: 'i-i-s-h-m-sushhnost-приборы-зд-e/new' });
  this.route('i-i-s-h-m-sushhnost-человек-l');
  this.route('i-i-s-h-m-sushhnost-человек-e',
  { path: 'i-i-s-h-m-sushhnost-человек-e/:id' });
  this.route('i-i-s-h-m-sushhnost-человек-e.new',
  { path: 'i-i-s-h-m-sushhnost-человек-e/new' });
});

export default Router;
