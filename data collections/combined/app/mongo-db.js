(function () {
    'use strict';
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/mydb";
    //var url = "mongodb://172.16.0.168:27017/600DE79B-DCCD-4965-BC93-0A6A8E6AE388";

    angular.module('app')
        .service('mongoService', constructor);
    constructor.$inject = ["$q"];

    function constructor($q) {
        return {
            get: get,
            insert: insert,
            remove: remove,
            update: update,
            newGuid: newGuid
        };

        function newGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function get(entity, query) {
            var deferred = $q.defer();
            MongoClient.connect(url, function (err, db) {
                var col = db.collection(entity);
                // Show that duplicate records got dropped
                col.find(query).toArray(function (err, items) {
                    db.close();
                    deferred.resolve(items);
                });
            });
            return deferred.promise;
        }

        function insert(entity, data) {
            // data array
            var deferred = $q.defer();
            MongoClient.connect(url, function (err, db) {
                var col = db.collection(entity);
                // Show that duplicate records got dropped
                col.insert(data, { w: 1 }, function (err, result) {
                    db.close();
                    deferred.resolve('done');
                });
            });
            return deferred.promise;
        }

        function remove(entity, filter) {
            // data object
            var deferred = $q.defer();
            MongoClient.connect(url, function (err, db) {
                var col = db.collection(entity);
                col.removeOne(filter, { w: 1 }, function (err, r) {
                    db.close();
                    deferred.resolve('done');
                });
            });
            return deferred.promise;
        }

        function update(entity, filete, newData) {
            var deferred = $q.defer();
            MongoClient.connect(url, function (err, db) {
                var col = db.collection(entity);
                col.updateOne(filete, { $set: newData });
                deferred.resolve('done');
            });
            return deferred.promise;
        }
    }
})();