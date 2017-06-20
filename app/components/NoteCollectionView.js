import {Marionette} from '../../vendor/vendor';
import NoteItemView from './NoteItemView';

export default Marionette.CollectionView.extend({
  childView: NoteItemView,
  tagName: 'ul',

  selectItem(childView) {
    this.children.each((child) => child.setSelected(child === childView));
  },

  onChildviewSelectItem(childView) {
    this.triggerMethod('selected:model', childView.model);
  },

  setSelected(model) {
    const childView = this.children.findByModel(model);
    this.selectItem(childView);
  }
});
