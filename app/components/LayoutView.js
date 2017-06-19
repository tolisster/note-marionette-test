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

  onRender() {
    const noteCollection = new NoteCollection;

    this.showChildView('header', new HeaderView());
    this.showChildView('list', new NoteCollectionView({
      collection: noteCollection,
    }));
    this.showChildView('editor', new NoteEditorView({
      collection: noteCollection,
    }));
  }
});
