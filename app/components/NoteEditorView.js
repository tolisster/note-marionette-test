import {_, Marionette} from '../../vendor/vendor';

export default Marionette.View.extend({
  tagName: 'textarea',
  template: _.noop,
  events: {
    'input': 'onInput',
    'blur': 'onBlur'
  },

  onRender() {
    this.$el.val(this.model.get('content'));
    this.$el.focus();
  },

  onInput() {
    this.model.set('content', this.$el.val());
  },

  onBlur() {
    this.model.save();
  },
});
