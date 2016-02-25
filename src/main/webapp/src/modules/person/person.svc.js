
(function (ng) {

    var mod = ng.module("personModule");

    mod.service("personService", ["personContext", function (context) {
            var records = [{
                    id: 123456,
                    name: 'Diego F. Ruiz S.',
                    email: 'df.ruiz@uniandes.edu.co'
                },
                {
                    id: 654321,
                    name: 'Jaime Chavarriaga',
                    email: 'ja.chavarriaga908@uniandes.edu.co'
                }];

            this.fetchRecords = function () {

                var data = records;

                return data;
            };

            this.fetchRecord = function (id) {
                var id = id;
                var record;
                ng.forEach(records, function (value) {
                    if (value.id === id) {
                        record = ng.copy(value);
                         return record;
                    }
                });
            };

            this.saveRecord = function (currentRecord) {
                if (currentRecord.id) {
                    var record = ng.fromJson(currentRecord);
                    ng.forEach(records, function (value, key) {
                        if (value.id === currentRecord.id) {
                            records.splice(key, 1, record);
                        }
                    });

                } else
                {
                    var record = ng.fromJson(currentRecord);
                    record.id = Math.floor(Math.random() * 10000);
                    records.push(record);

                }
            };
            this.deleteRecord = function (id) {

                ng.forEach(records, function (value, key) {
                    if (value.id === id) {
                        records.splice(key, 1);
                    }
                });
            };
        }]);
})(window.angular);