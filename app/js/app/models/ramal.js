/**
 * Model RamalApp
 *
 * Declaração da classe Ramal
 */

 (function () {
   'use strict';

   App.Models.Ramal = Backbone.Model.extend({
     defaults: function () {
       return {
         numero: "0000",
         setor: "Não informado",
         colaboradores: [""],
         createdAt: new Date()
       };
     }
   });

 }());
