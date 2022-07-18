(function () {
    'use strict';

    angular
        .module('app')
        .controller('Angularcontroller', Angularcontroller);

    Angularcontroller.$inject = ['$location'];

    function Angularcontroller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Angularcontroller';

        activate();

        function activate() { }
    }
})();

app.controller('APIController', function ($scope, APIService) {
    getAll();

    function getAll() {
        var servCall = APIService.getSubs();
        servCall.then(function (d) {
            $scope.subscriber = d.data;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }
})
