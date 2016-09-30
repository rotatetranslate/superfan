(function() {
  "use strict";

  angular
  .module('superfanApp')
  .controller("CelebritiesController", CelebritiesController);

  CelebritiesController.$inject = ["$state", "instagrammer.DataService"];

  function CelebritiesController($state, userDataService) {
    var vm = this;

    vm.guest = userDataService;

  }

})();
