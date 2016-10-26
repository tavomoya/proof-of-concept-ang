'use strict';

angular.module('proofOfConceptApp')
.factory('Pharmacy', function ($http, $q) {

    function Pharmacy () {

        this.apiPath = 'http://127.0.0.1:9002/pharmacy';

    }

    Pharmacy.prototype.GetById = function (pharmacyId) {
        var deferred = $q.defer();

        $http.get(this.apiPath + '/' + pharmacyId)
        .then(function (obj) {
            if (obj.data.pharmacy_base_id < 1) {
                deferred.reject({
                    error: 'Theres no record with that Id'
                });
            }
            var data = [];
            deferred.resolve(obj.data);
        })
        .catch(function (err) {
            console.log('I got an error', err);
            deferred.reject(err);
        });

        return deferred.promise;
    };

    Pharmacy.prototype.GetByQuery = function (query) {
        var deferred = $q.defer();

        $http.post(this.apiPath + '/query', query)
        .then(function (res) {
            if (res.data.length < 1) {
                deferred.reject({
                    error: 'There are no pharmacies with this parameters'
                });
            };
            deferred.resolve(res.data);
        })
        .catch(function (err) {
            deferred.reject(err);
        });
        
        return deferred.promise;
    };

    return Pharmacy;
});