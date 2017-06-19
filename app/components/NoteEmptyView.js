import {Marionette} from '../../vendor/vendor';
import template from '../templates/NoteEmpty.jst';

export default Marionette.View.extend({
  tagName: 'li',
  className: 'empty',
  template: template
});