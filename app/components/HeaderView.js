import {Marionette} from '../../vendor/vendor';
import template from '../templates/Header.jst';

export default Marionette.View.extend({
  template: template,
  triggers: {
    'click .new': 'create:item'
  }
});
