define(
  function() {
    'use strict';
    return function($http, $q) {
      return {
        getMember: function() {
          // return $http.get('/json/list.json');

          var deferrerd = $q.defer();
          $http.get('/json/member.json')
              .then(function (response) {
                deferrerd.resolve(response.data);
              });

          return deferrerd.promise;
        }
      };
    };
  });