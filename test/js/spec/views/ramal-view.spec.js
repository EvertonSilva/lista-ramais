/**
 * View RamalApp
 *
 * Suite de testes para RamalView
 */

 describe("App.Views.RamalView", function () {
   before(function () {
     this.$fixtures = $('<div id="ramal-view-fixtures"></div>');
   });

   beforeEach(function () {
     this.$fixtures.empty().appendTo($('#fixtures'));

     this.view = new App.Views.RamalView({
       el: this.$fixtures,
       model: new App.Models.Ramal()
     });

   });

   afterEach(function () {
     this.view.model.destroy();
   });

   after(function () {
     this.$fixtures.empty();
   });

   it("should be valid", function () {
     expect(this.view).to.be.ok;
   });

   it("can render an item with default values", function () {
     var $ramal = $(".ramal"), $setor = $(".setor"), $colab = $(".colab");

     expect($ramal.text()).to.be.equal("0000");
     expect($setor.text().toLowerCase()).to.be.equal("não informado");
     expect($colab.text()).to.be.equal("");
   });

   it("can render an item using correct html tags", function () {
     var $ramal = $(".ramal"), $setor = $(".setor"), $colab = $(".colab");

     expect($ramal.prop("tagName").toLowerCase()).to.be.equal("h2");
     expect($setor.prop("tagName").toLowerCase()).to.be.equal("p");
     expect($colab.prop("tagName").toLowerCase()).to.be.equal("p");
   });

   it("should binds the expected html to the correct DOM location", function (done) {
     this.view.model.once("change", function () {
       var $viewEl = $("#ramal-view-fixtures"), $body = $('body');

       expect($body.html()).to.contain($viewEl.html());
       expect($viewEl.html())
        .to.contain('<h2 class="ramal">9009</h2>').and
        .to.contain('<p class="setor">Classe 205</p>').and
        .to.contain('<p class="colab">Gregório</p>');

       done();
     });

     this.view.model.set({
       numero: "9009",
       setor: "Classe 205",
       colaboradores: ["Gregório"]
     });

   });
 });
