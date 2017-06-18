import _ from  'underscore';
import Backbone from 'backbone';
import {LocalStorage} from 'backbone.localstorage';
import $ from 'jquery';
import Marionette from 'backbone.marionette';
Backbone.$ = $;
window.$ = $;
export {_, $, Backbone, Marionette, LocalStorage};
