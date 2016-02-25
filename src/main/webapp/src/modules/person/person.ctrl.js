// src/modules/person/person.ctrl.js
// Controlador para el módulo de personas

(function (ng) {
// es parte del módulo "personModule"
      var mod = ng.module("personModule");
// crea el controlador con dependencias a $scope y a personService
    mod.controller("personCtrl", ["$scope", "personService", function ($scope, svc) {


            $scope.currentRecord = {};
            $scope.records = [];

            $scope.today = function () {
                $scope.value = new Date();
            };

            $scope.clear = function () {
                $scope.value = null;
            };

            $scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened = true;
            };

            var self = this;

            //Variables para el controlador
            this.readOnly = false;
            this.editMode = false;


            this.changeTab = function (tab) {
                $scope.tab = tab;
            };


            this.createRecord = function () {

                $scope.currentRecord = {};
                this.editMode = true;
            };


            this.editRecord = function (record) {
                svc.fetchRecord(record.id);
                self.editMode = true;
                $scope.currentRecord = record;

            };


            this.fetchRecords = function () {
                self.editMode = false;
                $scope.records = svc.fetchRecords();
                return svc.fetchRecords();

            };


            this.saveRecord = function () {
                svc.saveRecord($scope.currentRecord);
                self.fetchRecords();
            };

            this.deleteRecord = function (record) {
                svc.deleteRecord(record.id);
                self.fetchRecords();
            };

            this.fetchRecords();

        }]);

})(window.angular);