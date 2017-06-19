import {Marionette} from '../../vendor/vendor';
import template from '../templates/NoteItem.jst';

export default Marionette.View.extend({
  tagName: 'li',
  className: 'note',
  template: template,
  modelEvents: {
    change: 'render'
  },
  triggers: {
    'click': 'select:item'
  },

  setSelected(selected) {
    this.$el.toggleClass('active', selected);
  }
});
