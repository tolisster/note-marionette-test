import {Marionette} from '../../vendor/vendor';
import NoteCollection from '../collections/NoteCollection';
import NoteEmptyView from './NoteEmptyView';
import NoteItemView from './NoteItemView';

export default Marionette.CollectionView.extend({
  emptyView: NoteEmptyView,
  childView: NoteItemView,
  collection: new NoteCollection,

  tagName() {
    return !this.isEmpty() ? 'ul' : 'div';
  },
});
