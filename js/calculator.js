
let app = angular.module('app-calculator', []);


app.controller('mainController', function($scope, $http){

    $scope.reward = 50;
    $scope.difficulty = 0;

    $scope.hashingPower = 5;
    $scope.machineWattage = 0;
    $scope.powerCost = 0;

    $scope.actinium = {
        time: Date.now(),
        exchangerates: {
            usd: 0,
            gbp: 0,
            eur: 0
        }
    };

    $scope.hashingUnitOptions = {
        availablehashingUnits: [
            {value: 1, name: 'H/s'},
            {value: 1000, name: 'KH/s'},
            {value: 1000000, name: 'MH/s'},
            {value: 1000000000, name: 'GH/s'},

        ],
        selectedHashingUnit: {value: 1000000, name: 'MH/s'}
    };

    $http.get('https://api.actinium.org/v1/acm/fiatprice').then(function (response) {

        let cdr = response.data;

        $scope.actinium.exchangerates.usd = parseFloat(cdr.USD);
        $scope.actinium.exchangerates.gbp = parseFloat(cdr.GBP);
        $scope.actinium.exchangerates.eur = parseFloat(cdr.EUR);

    });

    $http.get('https://api.actinium.org/v1/acm/difficulty').then(function (response) {

        let cdr = response.data;

        $scope.difficulty = parseFloat(cdr.difficulty);
    });

    $scope.getACMPerDay_Exact = function () {
        return 86400 / ($scope.difficulty * (Math.pow(2,48)/65535) / ($scope.hashingPower * $scope.hashingUnitOptions.selectedHashingUnit.value)) * $scope.reward;
    };

    $scope.getACMPerDay = function () {
        let temp = $scope.getACMPerDay_Exact();
        return temp;
    };

    $scope.getUSDPerDay = function () {
        let temp = $scope.getACMPerDay_Exact();
        temp *= $scope.actinium.exchangerates.usd;
        return temp.toFixed(2);
    };

    $scope.getGBPPerDay = function () {
        let temp = $scope.getACMPerDay_Exact();
        temp *= $scope.actinium.exchangerates.gbp;
        return temp.toFixed(2);
    };

    $scope.getEURPerDay = function () {
        let temp = $scope.getACMPerDay_Exact();
        temp *= $scope.actinium.exchangerates.eur;
        return temp.toFixed(2);
    };

    $scope.getPowerCostPerDay = function () {
        let temp = $scope.machineWattage * $scope.powerCost / 1000 * 24;
        return temp.toFixed(2);
    };

    $scope.getProfitPerDay = function () {
        let temp = $scope.getUSDPerDay() - $scope.getPowerCostPerDay();
        return temp.toFixed(2);
    };

});
