import {Backbone, Marionette} from '../../vendor/vendor';
import LayoutView from './LayoutView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new LayoutView());
    Backbone.history.start();
  }
});
