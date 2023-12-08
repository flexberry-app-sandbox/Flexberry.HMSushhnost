import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.h-m-sushhnost.caption'),
          title: i18n.t('forms.application.sitemap.h-m-sushhnost.title'),
          children: [{
            link: 'i-i-s-h-m-sushhnost-прибор-учёта-l',
            caption: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-прибор-учёта-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-прибор-учёта-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-h-m-sushhnost-человек-l',
            caption: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-человек-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-человек-l.title'),
            children: null
          }, {
            link: 'i-i-s-h-m-sushhnost-здание-l',
            caption: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-здание-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-h-m-sushhnost-н-с-l',
            caption: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-н-с-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-н-с-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-h-m-sushhnost-показания-пр-l',
            caption: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-показания-пр-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-показания-пр-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-h-m-sushhnost-приборы-зд-l',
            caption: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-приборы-зд-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-sushhnost.i-i-s-h-m-sushhnost-приборы-зд-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})