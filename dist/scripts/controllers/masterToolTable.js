"use strict";angular.module("sbAdminApp").controller("masterToolTableCtrl",function($scope,$filter,masterToolTableService){masterToolTableService.query(function(data){$scope.tools=data.tools})});