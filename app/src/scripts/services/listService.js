define(
  function() {
    'use strict';
    return function($http, $q) {
      return {
        getList: function() {
          // return $http.get('/json/list.json');

          var deferrerd = $q.defer();
          $http.get('/json/list.json')
              .then(function (response) {
                deferrerd.resolve(response.data);
              });

          return deferrerd.promise;
        }
      };
    };
  });