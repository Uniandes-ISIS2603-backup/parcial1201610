(function (ng) {

    var mod = ng.module("mainApp", [
        "ui.router",
        "personModule",
        "taskModule"
    ]);

    mod.config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);

    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/person");
            $stateProvider
            //En esta sección deben ir los estados que tendrá su aplicación
            //Ejemplo
            //.state(......
                    .state('person', {
                        url: '/person',
                        controller: "personCtrl",
                        controllerAs: "ctrl",
                        templateUrl: "src/modules/person/person.tpl.html"
                    })
                    .state('task', {
                        url: '/task',
                        controller: "taskCtrl",
                        controllerAs: "ctrl",
                        templateUrl: "src/modules/task/task.tpl.html"
                    });
        }]);
})(window.angular);