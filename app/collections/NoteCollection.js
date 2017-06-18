import {Backbone, LocalStorage} from '../../vendor/vendor';
import Note from '../models/Note';

export default Backbone.Collection.extend({
  model: Note,
  localStorage: new LocalStorage('notes')
});
