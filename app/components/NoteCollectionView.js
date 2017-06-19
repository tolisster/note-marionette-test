import {Marionette} from '../../vendor/vendor';
import NoteEmptyView from './NoteEmptyView';
import NoteItemView from './NoteItemView';

export default Marionette.CollectionView.extend({
  emptyView: NoteEmptyView,
  childView: NoteItemView,
  tagName: 'ul',

  onChildviewSelectItem(childView) {
    this.children.each((child) => child.setSelected(child === childView));
  },

  setSelected(model) {
    const childView = this.children.findByModel(model);
    this.onChildviewSelectItem(childView);
  }
});
