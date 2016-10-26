'use strict';

angular.module('proofOfConceptApp')
.controller('PharmacyCreateCtrl', function ($scope, $routeParams, Pharmacy, toaster) {

    $scope.pharmacy = {};
    $scope.activeTab = 1;

    if ($routeParams.id) {
        new Pharmacy().GetById(parseInt($routeParams.id))
        .then(function (res) {
            $scope.pharmacy = res;
        }, function (err) {
            console.log('There was an error', err);
            toaster.pop('error', 'Error Retreiving Data', err.data.user_message);
        })
    }

    $scope.goBack = function () {
        history.back();
    };

});