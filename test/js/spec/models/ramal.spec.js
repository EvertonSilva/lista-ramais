/**
 * Model RamalApp
 *
 * Suite de testes para o Model Ramal
 */

 describe("App.Models.Ramal", function () {
   it("has default values", function () {
    //  Create a empty model
    var model = new App.Models.Ramal();

    expect(model).to.be.ok;
    expect(model.get("numero")).to.equal("0000");
    expect(model.get("setor")).to.equal("Não informado");
    expect(model.get("colaboradores")).to.be.an("Array");
    expect(model.get("createdAt")).to.be.a("Date");

   });

   it("sets passed attributes", function () {
     var model = new App.Models.Ramal({
       numero: "0085",
       setor: "Portaria",
       colaboradores: ["Porteiro Zé"],
       createdAt: new Date()
     });

     expect(model.get("numero")).to.equal("0085");
     expect(model.get("setor")).to.equal("Portaria");
     expect(model.get("colaboradores")).to.include("Porteiro Zé");
   });

 });
