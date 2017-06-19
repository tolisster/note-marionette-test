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
    } else {
      this.$el.val('');
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

      const tags = content.match(/\#\w+/g);
      if (tags) {
        this.model.set('tags', tags.map((tag) => tag.substr(1)));
      } else {
        this.model.set('tags', []);
      }
    }
  },

  setModel(model) {
    this.model = model;
    this.render();
    this.$el.focus();
  }
});
