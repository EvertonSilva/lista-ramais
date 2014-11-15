/**
 * Collection RamalApp
 *
 * Declaração da classe Ramais
 */

 (function () {
   'use strict';

   App.Collections.Ramais = Backbone.Collection.extend({
     model: App.Models.Ramal,

     // Definir a persistencia via localStorage
     localStorage: new Backbone.LocalStorage(App.Config.storeName)
   });

 }());
