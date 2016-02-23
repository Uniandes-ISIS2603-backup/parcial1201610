// src/app.js
// Configuración de las aplicaciones

(function (ng) {

  // define la aplicación con sus dependencias
  var mod = ng.module("mainApp", [
    "ui.router",
    "personModule",
    "personMock",
    "taskModule",
    "taskMock"
  ]);
  
  // define los estados y las rutas de la aplicación
  mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    // estado por defecto
    $urlRouterProvider.otherwise("/person");
    
    // definición de los estados de la aplicación
    $stateProvider
      .state('person', {
        url: '/person',
        controller: "personCtrl",
        controllerAs: "ctrl",
        templateUrl: "src/modules/person/person.tpl.html"
      })
      
      // agregar otros estados
      .state( 'nombre-estado', { 
        
        /* datos */ 
        
      });  // el último estado tiene punto y coma
      
  }]); // cierra el mod.config( ... )
    
})(window.angular);