import {Marionette} from '../../vendor/vendor';
import NoteCollection from '../collections/NoteCollection';
import HeaderView from './HeaderView';
import NoteCollectionView from './NoteCollectionView';
import NoteEditorView from './NoteEditorView';
import template from '../templates/Layout.jst';

export default Marionette.View.extend({
  className: 'layout',
  template: template,
  regions: {
    header: 'header',
    list: '.list',
    editor: '.editor',
    footer: 'footer'
  },

  initialize() {
    this.noteCollection = new NoteCollection;
    this.noteCollectionView = new NoteCollectionView({
      collection: this.noteCollection,
    });
  },

  onRender() {
    this.showChildView('header', new HeaderView());
    this.showChildView('list', this.noteCollectionView);

    this.noteCollection.fetch();
    if (!this.noteCollection.length) {
      this.createItem();
    } else {
      this.setSelected(this.noteCollection.first());
    }
  },

  createItem() {
    const note = this.noteCollection.create();
    this.setSelected(note);
  },

  removeItem() {
    const noteEditorView = this.getChildView('editor');
    noteEditorView.model.destroy();
    if (this.noteCollection.length) {
      this.setSelected(this.noteCollection.first());
    } else {
      this.createItem();
    }
  },

  setSelected(note) {
    this.noteCollectionView.setSelected(note);
    this.showChildView('editor', new NoteEditorView({
      model: note
    }));
  },

  onChildviewCreateItem() {
    this.createItem();
  },

  onChildviewRemoveItem() {
    this.removeItem();
  },

  onChildviewSelectedModel(note) {
    this.setSelected(note);
  },
});
