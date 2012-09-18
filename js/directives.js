angular.module('components', [])
	.directive('helloWorld', function(){
		return {
				restrict: 'E',
				scope:{
						name: '@'
					},
				templateUrl: 'directives/helloWorld.html'
			}
	})
	
angular.module('HelloApp', ['components'])