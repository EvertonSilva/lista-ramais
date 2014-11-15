/**
 * Collection RamalApp
 *
 * Suite de testes para a Collection de ramais
 */

 describe("App.Collections.Ramais", function () {
   // Setup inicial para todos os tests da suite
   before(function () {
     // Create a reference for all internal suites/specs
     this.ramais = new App.Collections.Ramais();

     // Use internal meethod to clear out existing data
     this.ramais.localStorage._clear();
   });

   after(function () {
     // remove the reference
     this.ramais = null;
   });

   describe("creation", function () {
     it("has default values", function () {
       expect(this.ramais).to.be.ok();
       expect(this.ramais).to.have.length(0);
     });

     it("should be empty on fetch", function (done) {
       var ramais = new App.Collections.Ramais();

       ramais.once("reset", function () {
         expect(ramais).to.have.length(0);
         done();
       })

       ramais.fetch({ reset: true });
     });

   });

   describe("modification", function () {
     // Adiciona um ramal a coleção
     beforeEach(function () {
       this.ramais.create({
         numero: "8800",
         setor: "Portaria",
         colaboradores: ["José Maria", "João José"]
       });
     });

     // Limpa os dados inseridos e reseta a coleção
     afterEach(function () {
       this.ramais.localStorage._clear();
       this.ramais.reset();
     });

     it("has a single item", function (done) {
       var ramais = this.ramais, ramal;

       ramais.once("reset", function () {
         expect(ramais).to.have.length(1);

         ramal = ramais.at(0);
         expect(ramal).to.be.ok;
         expect(ramal.get('numero')).to.be.equal("8800");
         expect(ramal.get('setor')).to.be.equal("Portaria");
         expect(ramal.get('colaboradores')).to.contain("José Maria");
         done();
       });

       ramais.fetch({ reset: true });
     });

     it("can delete an item from collection", function (done) {
       var ramais = this.ramais, ramal;

       ramais.once("remove", function () {
         expect(ramais).to.have.length(0);
         done();
       });

       ramal = ramais.shift();
       expect(ramal).to.be.ok;

     });

     it("can add a second item to collection", function (done) {
       var ramais = this.ramais, ramal;

       ramais.on("add", function () {
         expect(ramais).to.have.length(2);
         done();
       });

       ramais.create({
         numero: "8811",
         setor: "Teste"
       });

       ramal = ramais.at(1);
       expect(ramal).to.be.ok;
       expect(ramal.get('numero')).to.be.equal("8811");
     });

   });
 });
