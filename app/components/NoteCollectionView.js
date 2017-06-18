import {Marionette, Backbone} from '../../vendor/vendor';
import NoteEmptyView from './NoteEmptyView';
import NoteItemView from './NoteItemView';

export default Marionette.CollectionView.extend({
  emptyView: NoteEmptyView,
  childView: NoteItemView,
  collection: new Backbone.Collection([
    {id: 1, content: 'My text'},
    {id: 2, content: 'Another Item'}
  ]),

  tagName() {
    return !this.isEmpty() ? 'ul' : 'div';
  },
});
