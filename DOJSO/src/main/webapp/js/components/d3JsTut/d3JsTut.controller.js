(function d3JsTutControllerDefinition() {
    'use strict';

    angular
    	.module('doJSo')
        .controller('DjsD3JsTutController', d3JsTutController);

    d3JsTutController.$inject = ['$scope', 'DjsD3JsTut'];

    function d3JsTutController($scope, D3JsTut) {
        var d3JsTutCtrl = this; // TODO Here is a reference to THIS controller

        /* "private" */

        // TODO declare/initialize private variables here
        var myData = []; // TODO this is a sample

        /* "public" */

        /*      API */ // TODO Hook ctrl API functions on the reference to THIS controller like the example below.

        d3JsTutCtrl.setItemName = setItemName; // TODO this is a sample

        /*      API function definitions */ // TODO place ctrl API function definitions here

        /**
         * TODO this is a sample
         */
        function setItemName(itemIndex, itemName) {
            getItem(itemIndex).name = itemName;
            myData.push(itemName);
        }

        /* implementation details */ // TODO place decomponed function definitions here

        /**
         * TODO this is a sample
         */
        function getItem(itemIndex) {
            return $scope.myModel.items[itemIndex];
        }
    }
})();

