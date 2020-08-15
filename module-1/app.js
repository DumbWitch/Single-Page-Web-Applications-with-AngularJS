(function(){
'use strict';

    angular.module('lunchChecker', [])
    .controller('lunchCheckerController', lunchCheckerController);
    lunchCheckerController.$inject=["$scope"];
    function lunchCheckerController($scope){
     $scope.item='';
     $scope.empty=true;
     $scope.message='';
     $scope.CheckItem = function(){
             if($scope.item){
               $scope.empty=false;
               var item = $scope.item.split(',');
               if(item.length <= 3){
               $scope.message='Enjoy!';
               }
               else{
                $scope.message='Too much!';
             }
           }

};
}
})();
