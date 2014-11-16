/**
 * View RamalApp
 *
 * Declaração da Classe RamalView
 */

 (function () {
   'use strict';

   App.Views.RamalView = Backbone.View.extend({

     template: _.template(App.Templates['tpl-ramal-view']),

     events: {},

     initialize: function (options) {
       this.listenTo(this.model, "change", this.render);
       this.listenTo(this.model, "destroy", this.remove);
       this.render();
     },

     render: function () {
       var attr = this.model.toJSON();
       this.$el.html(this.template(attr));
     }
   });
 }());
