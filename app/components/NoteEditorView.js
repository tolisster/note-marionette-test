import {_, Marionette} from '../../vendor/vendor';

export default Marionette.View.extend({
  tagName: 'textarea',
  template: _.noop,
  events: {
    'input': 'onInput',
  },

  onRender() {
    if (this.model) {
      this.$el.val(this.model.get('content'));
    }
  },

  onInput() {
    const content = this.$el.val().trim();
    console.log('input');

    if (content) {
      if (this.model) {
        this.model.set('content', content);
      } else {
        this.triggerMethod('create:item');
      }
    } else {
      if (this.model) {
        this.model.destroy();
        this.model = null;
      }
    }
  },

  setModel(model) {
    this.model = model;
    this.render();
    this.$el.focus();
  }
});
