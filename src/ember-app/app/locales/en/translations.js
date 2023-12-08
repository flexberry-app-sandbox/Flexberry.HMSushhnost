import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHM_SushhnostЗданиеLForm from './forms/i-i-s-h-m-sushhnost-здание-l';
import IISHM_SushhnostНСLForm from './forms/i-i-s-h-m-sushhnost-н-с-l';
import IISHM_SushhnostПоказанияПрLForm from './forms/i-i-s-h-m-sushhnost-показания-пр-l';
import IISHM_SushhnostПриборУчётаLForm from './forms/i-i-s-h-m-sushhnost-прибор-учёта-l';
import IISHM_SushhnostПриборыЗдLForm from './forms/i-i-s-h-m-sushhnost-приборы-зд-l';
import IISHM_SushhnostЧеловекLForm from './forms/i-i-s-h-m-sushhnost-человек-l';
import IISHM_SushhnostЗданиеEForm from './forms/i-i-s-h-m-sushhnost-здание-e';
import IISHM_SushhnostНСEForm from './forms/i-i-s-h-m-sushhnost-н-с-e';
import IISHM_SushhnostПоказанияПрEForm from './forms/i-i-s-h-m-sushhnost-показания-пр-e';
import IISHM_SushhnostПриборУчётаEForm from './forms/i-i-s-h-m-sushhnost-прибор-учёта-e';
import IISHM_SushhnostПриборыЗдEForm from './forms/i-i-s-h-m-sushhnost-приборы-зд-e';
import IISHM_SushhnostЧеловекEForm from './forms/i-i-s-h-m-sushhnost-человек-e';
import IISHM_SushhnostЗданиеModel from './models/i-i-s-h-m-sushhnost-здание';
import IISHM_SushhnostНСModel from './models/i-i-s-h-m-sushhnost-н-с';
import IISHM_SushhnostПоказанияПрModel from './models/i-i-s-h-m-sushhnost-показания-пр';
import IISHM_SushhnostПриборУчётаModel from './models/i-i-s-h-m-sushhnost-прибор-учёта';
import IISHM_SushhnostПриборыЗдModel from './models/i-i-s-h-m-sushhnost-приборы-зд';
import IISHM_SushhnostЧеловекModel from './models/i-i-s-h-m-sushhnost-человек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-h-m-sushhnost-здание': IISHM_SushhnostЗданиеModel,
    'i-i-s-h-m-sushhnost-н-с': IISHM_SushhnostНСModel,
    'i-i-s-h-m-sushhnost-показания-пр': IISHM_SushhnostПоказанияПрModel,
    'i-i-s-h-m-sushhnost-прибор-учёта': IISHM_SushhnostПриборУчётаModel,
    'i-i-s-h-m-sushhnost-приборы-зд': IISHM_SushhnostПриборыЗдModel,
    'i-i-s-h-m-sushhnost-человек': IISHM_SushhnostЧеловекModel
  },

  'application-name': 'H m_ sushhnost',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'H m_ sushhnost',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'H m_ sushhnost',
          title: 'H m_ sushhnost'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'h-m-sushhnost': {
          caption: 'HM_Sushhnost',
          title: 'HM_Sushhnost',
          'i-i-s-h-m-sushhnost-прибор-учёта-l': {
            caption: 'Прибор учёта',
            title: ''
          },
          'i-i-s-h-m-sushhnost-человек-l': {
            caption: 'Человек',
            title: ''
          },
          'i-i-s-h-m-sushhnost-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-h-m-sushhnost-н-с-l': {
            caption: 'НС',
            title: ''
          },
          'i-i-s-h-m-sushhnost-показания-пр-l': {
            caption: 'Показания пр',
            title: ''
          },
          'i-i-s-h-m-sushhnost-приборы-зд-l': {
            caption: 'Приборы зд',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-h-m-sushhnost-здание-l': IISHM_SushhnostЗданиеLForm,
    'i-i-s-h-m-sushhnost-н-с-l': IISHM_SushhnostНСLForm,
    'i-i-s-h-m-sushhnost-показания-пр-l': IISHM_SushhnostПоказанияПрLForm,
    'i-i-s-h-m-sushhnost-прибор-учёта-l': IISHM_SushhnostПриборУчётаLForm,
    'i-i-s-h-m-sushhnost-приборы-зд-l': IISHM_SushhnostПриборыЗдLForm,
    'i-i-s-h-m-sushhnost-человек-l': IISHM_SushhnostЧеловекLForm,
    'i-i-s-h-m-sushhnost-здание-e': IISHM_SushhnostЗданиеEForm,
    'i-i-s-h-m-sushhnost-н-с-e': IISHM_SushhnostНСEForm,
    'i-i-s-h-m-sushhnost-показания-пр-e': IISHM_SushhnostПоказанияПрEForm,
    'i-i-s-h-m-sushhnost-прибор-учёта-e': IISHM_SushhnostПриборУчётаEForm,
    'i-i-s-h-m-sushhnost-приборы-зд-e': IISHM_SushhnostПриборыЗдEForm,
    'i-i-s-h-m-sushhnost-человек-e': IISHM_SushhnostЧеловекEForm
  },

});

export default translations;
