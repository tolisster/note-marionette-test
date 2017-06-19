import {Marionette} from '../../vendor/vendor';
import NoteEmptyView from './NoteEmptyView';
import NoteItemView from './NoteItemView';

export default Marionette.CollectionView.extend({
  emptyView: NoteEmptyView,
  childView: NoteItemView,
  tagName: 'ul'
});
