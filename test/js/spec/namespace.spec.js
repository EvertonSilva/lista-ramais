/**
 * Namespace RamalApp
 *
 * Arquivo de teste para a declaração e instância
 * da classe principal da aplicação.
 *
 */

 describe("Namespace", function () {
   it("provides the 'App' object", function () {
     // Expect exists and is an object
     expect(App).to.be.an("object");

     // Expect all properties are present
     expect(App).to.include.keys(
       "Config", "Collections", "Models",
       "Routers", "Templates", "Views"
     );

   });

   it("provides the 'app' instance", function () {
     expect(app).to.be.an("object");
   });


 });
