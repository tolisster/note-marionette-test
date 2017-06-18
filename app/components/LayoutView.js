import {Marionette} from '../../vendor/vendor';
import HeaderView from './HeaderView';
import NoteCollectionView from './NoteCollectionView';
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
    this.showChildView('header', new HeaderView());
    this.showChildView('list', new NoteCollectionView());
  }
});
