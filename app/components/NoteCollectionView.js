import {Marionette} from '../../vendor/vendor';
import NoteEmptyView from './NoteEmptyView';
import NoteItemView from './NoteItemView';

export default Marionette.CollectionView.extend({
  emptyView: NoteEmptyView,
  childView: NoteItemView,
  tagName: 'ul',

  selectItem(childView) {
    this.children.each((child) => child.setSelected(child === childView));
  },

  onChildviewSelectItem(childView) {
    this.selectItem(childView);
    this.triggerMethod('selected:model', childView.model);
  },

  setSelected(model) {
    const childView = this.children.findByModel(model);
    this.selectItem(childView);
  }
});
