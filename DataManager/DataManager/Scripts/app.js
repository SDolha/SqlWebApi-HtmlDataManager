angular.module('MyOrganizationApp', [])
    .controller('EmployeesCtrl', function ($scope, $http) {
        var initialize = function () {
            $http.get('/api/Employees').then(function (response) {
                $scope.employees = response.data;
            });
            $scope.newEmployee = { FirstName: 'Test', LastName: 'Employee' };
        };
        initialize();
        $scope.addNewEmployee = function () {
            $http.post('/api/Employees', $scope.newEmployee).then(function () {
                initialize();
            });
        }
    });
