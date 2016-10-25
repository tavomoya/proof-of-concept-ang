'use strict';

angular.module('proofOfConceptApp')
.controller('PharmacyCtrl', function ($scope, $location, Pharmacy, toaster) {

    $scope.title = "Pharmacies";

    $scope.content = [];

    $scope.fields = [
        'pharmacy_base_nabp', 
        'pharmacy_base_pharmacyname', 
        'pharmacy_base_pharmaddr1', 
        'pharmacy_base_pharmcity', 
        'pharmacy_base_pharmstate', 
        'pharmacy_base_pharmzip', 
        'pharmacy_base_phone', 
        'pharmacy_base_npi'
    ];

    $scope.createNew = function () {
        $location.path('/pharmacy-create');
    };

    $scope.editContent = function (pharmacy) {
        $location.path('pharmacy-create', {
            id: pharmacy.id
        });
    };

    var search = {
        Nabp: 'ABC123'
    }

    $scope.search = function (findObject) {

        for (var key in findObject) {
            if (findObject[key] == '' || findObject[key] == undefined) {
                delete findObject[key];
            }
        };

        new Pharmacy().GetByQuery(findObject)
        .then(function (obj) {
            $scope.content = obj;
        }, function (err) {
            $scope.content = [];
            toaster.pop('error', 'Error Retreiving Data', err.data.user_message);
        })

    };

    $scope.mainGridOptions = {
        dataSource: {
            data: $scope.content,
            pageSize: 5
        },
        sortable: true,
        pageable: true,
        columns: [
            {
                field: 'pharmacy_base_nabp',
                title: 'Nabp'
            },
            {
                field: 'pharmacy_base_pharmacyname',
                title: 'Name'
            },
            {
                field: 'pharmacy_base_pharmaddr1',
                title: 'Address'
            },
            {
                field: 'pharmacy_base_pharmcity',
                title: 'City'
            },
            {
                field: 'pharmacy_base_pharmstate',
                title: 'State'
            },
            {
                field: 'pharmacy_base_pharmzip',
                title: 'Zip'
            },
            {
                field: 'pharmacy_base_phone',
                title: 'Phone'
            },
            {
                field: 'pharmacy_base_npi',
                title: 'Npi'
            }
        ]
    };

    $scope.goBack = function () {
        history.back();
    }

});