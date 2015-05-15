/**
 * Created by kiran on 4/23/2015.
 */
app.controller("gadgetsController",
        ['$scope','gadgetService',function($scope,gadgetService){

    function init(){
        $scope.gadgets  = gadgetService.getGadgets();
        $scope.gadget={};

    }
            $scope.showAddGaget = function(){
                $scope.add = true;
            }
            $scope.addGadget = function(){
                var item = $scope.gadget;
                gadgetService.addGadget(item)
            };

    init()
}]);