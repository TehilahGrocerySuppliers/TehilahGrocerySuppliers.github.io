app.controller ('HomeController', [
	'$scope', function ( $scope )
	{
		  
    /** oputput parameter values to console for debug purposes **/
    console.log('HomeController has loaded.');
    console.log('$scope:', $scope);
		  
    /****** CONTROLLER CODE ******/
    /** Video player **/
    $scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/CGyNZllB-dM");
    $scope.changeVideo = function() {
      $scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/8pqcWn_HwX8");
    };

	}
]);