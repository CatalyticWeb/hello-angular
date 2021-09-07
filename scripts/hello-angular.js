window.app = angular.module('hi-angular', []);

app.controller('MainController', function($scope, $http) {
    $scope.user = null;

    $http.get('../user')
        .then(response => {
            console.log(response.data);

            $scope.user = response.data;
        });

});