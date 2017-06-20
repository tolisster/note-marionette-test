import {Backbone} from '../../vendor/vendor';

export default Backbone.Model.extend({
  defaults: {
    content: '',
    tags: []
  },

  initialize() {
    this.listenTo(this, 'change:content', this.contentChanged);
  },

  contentChanged(model, value, options) {
    const tags = value.match(/\#\w+/g);
    if (tags) {
      this.set('tags', tags.map((tag) => tag.substr(1)));
    } else {
      this.set('tags', []);
    }
  },

  matchesFilter(filter) {
    return this.tags.find(tag => tag.startsWith(filter));
  }
});
