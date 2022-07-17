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
