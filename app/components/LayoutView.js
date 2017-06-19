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
    this.noteEditorView = new NoteEditorView({
      collection: this.noteCollection,
    });
  },

  onRender() {
    this.showChildView('header', new HeaderView());
    this.showChildView('list', this.noteCollectionView);
    this.showChildView('editor', this.noteEditorView);
  },

  onChildviewCreateItem() {
    const note = this.noteCollection.create();
    this.noteEditorView.setModel(note);
    this.noteCollectionView.setSelected(note);
  }
});
