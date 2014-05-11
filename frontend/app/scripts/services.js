var allogatorServices = angular.module('allogatorServices', ['ngResource']);

var server = "http://localhost:3000/";

allogatorServices.factory('Allocation', ['$resource',
  function($resource){
    return $resource(server + 'allocations/:allocation_id.json', {}, {
      query: {method:'GET', params:{allocation_id:''}, isArray:true}
    });
  }]);

allogatorServices.factory('User', ['$resource',
  function($resource){
    return $resource(server + 'users/:user_id.json', {}, {
      query: {method:'GET', params:{user_id:''}, isArray:true}
    });
  }]);

allogatorServices.factory('AllocationType', ['$resource',
  function($resource){
    return $resource(server + 'allocation_types/:allocation_type_id.json', {}, {
      query: {method:'GET', params:{allocation_type_id:''}, isArray:true}
    });
  }]);