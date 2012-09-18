//custom module w/ directive
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

//App module
angular.module('App', ['ngResource', 'components']);


//controllers
function TodoCtrl($scope){
	
	$scope.todos = [
		{text:'Learn AngularJS', done:false}, 
		{text:'Build an App', done:false}
		];
		
	$scope.getTotalTodos =function(){
		return $scope.todos.length;	
	};
	
	$scope.clearCompleted = function(){
		$scope.todos = _.filter($scope.todos, function(todo){
				return !todo.done;	
			})	
	};
		
	$scope.addTodo = function(){
			$scope.todos.push({text:$scope.formTodoText, done:false});
			$scope.formTodoText = "";
		};
	
}

function TwitterCtrl ($scope, $resource){
	$scope.twitter = $resource('http://search.twitter.com/:action',
		{action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},
		{get:{method:'JSONP'}}
	);
	
	$scope.doSearch = function(){
		$scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm});
	}
	
}