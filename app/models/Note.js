import {Backbone} from '../../vendor/vendor';

export default Backbone.Model.extend({
  defaults: {
    content: '',
    tags: []
  },

  matchesFilter(filter) {
    return this.tags.find(tag => tag.startsWith(filter));
  }
});
