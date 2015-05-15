/**
 * Created by kiran on 4/25/2015.
 */
app.controller('homeController',[
    '$scope','gadgetService',function($scope,gadgetService){
        $scope.data = "Hello I am referred from the home controller";
        gadgetService.addGadget();

    }
]);