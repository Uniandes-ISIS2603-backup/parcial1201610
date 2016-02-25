// src/modules/person/person.mod.js
// Definición del modulo de personas
(function(ng){
// define el módulo "personModule" con dependencia a ui.bootstrap
    var mod = ng.module("personModule", ["ui.bootstrap"]);
  // define una constante usada por el servicio    
    mod.constant("personContext", "api/persons");
    
})(window.angular);

