(function() {
  angular.module('superfanApp')
    .controller('UsersController', function($scope, $auth, $state, userDataService) {

      $scope.authenticate = function(provider) {
        if (!$auth.isAuthenticated()) {
          $auth.authenticate(provider).then(function(res) {
            userDataService.user = res.data.guest;
            $state.go('user_home');
          });
        }
      };
    });
})();
