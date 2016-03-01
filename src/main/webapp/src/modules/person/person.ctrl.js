// src/modules/person/person.ctrl.js
// Controlador para el módulo de personas

(function (ng) {
// es parte del módulo "personModule"
    var mod = ng.module("personModule");
// crea el controlador con dependencias a $scope y a personService y $q
    mod.controller("personCtrl", ["$scope", "personService", "$q", function ($scope, svc, $q) {

            $scope.currentRecord = {};
            $scope.records = [];
            var self = this;

            //Variables para el controlador
            this.readOnly = false;
            this.editMode = false;

            this.changeTab = function (tab) {
                $scope.tab = tab;
            };

            // función que retorna una promesa para crear a person
            $scope.savePerson = function (currentRecord) {

                return $q(function (resolve, reject) {
                    setTimeout(function () {
                        if (currentRecord !== null) {
                            svc.saveRecord(currentRecord);
                            self.fetchRecords();
                            resolve("Se adiciona el record");  // todo OK
                        } else {
                            reject({"message": "El record esta vacío"});//Error
                        }
                    }, 1000);
                });
            }

            // función que usa la promesa para crear a person
            $scope.useSavePerson = function () {
                // obtiene la promesa
                var promise = $scope.savePerson($scope.currentRecord);
                // ejecuto la promesa
                // y cuando termine ejecuta alguna de las dos funciones
                // del then
                promise.then(function (respuesta) {
                    console.debug(respuesta);
                }, function (error) {
                    console.debug(error.message);
                });
            }


            // función que retorna una promesa para editar a person
            $scope.editPerson = function (record) {

                return $q(function (resolve, reject) {
                    setTimeout(function () {
                        if (record !== null) {
                            svc.fetchRecord(record.id);
                            self.editMode = true;
                            $scope.currentRecord = record;
                            resolve("Se edita el record");  // todo OK
                        } else {
                            reject({"message": "El record esta vacío"});//Error
                        }
                    }, 1000);
                });
            }

            // función que usa la promesa para Editar a person
            $scope.useEditPerson = function (record) {
                // obtiene la promesa
                var promise = $scope.editPerson(record);
                // ejecuto la promesa
                // y cuando termine ejecuta alguna de las dos funciones
                // del then
                promise.then(function (respuesta) {
                    console.debug(respuesta);
                }, function (error) {
                    console.debug(error.message);
                });
            }

            this.createRecord = function () {
                $scope.currentRecord = {};
                this.editMode = true;
            };

            this.fetchRecords = function () {
                self.editMode = false;
                $scope.records = svc.fetchRecords();
                return svc.fetchRecords();

            };

            this.deleteRecord = function (record) {
                svc.deleteRecord(record.id);
                self.fetchRecords();
            };

            this.fetchRecords();

        }]);

})(window.angular);