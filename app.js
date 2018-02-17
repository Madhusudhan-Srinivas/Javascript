var app = angular.module("myApp", ['ngSanitize']);


app.controller("myController", function($scope, service1, $sce){
	
	
	
	$scope.retry = function(){
		
		
	service1.dbExist()
	.then(service1.createTable)
	.then(service1.insertDate)
	.then(function(data){
		
		$scope.status = $sce.trustAsHtml('SUCCESS: ' + data);
		
	}).catch(function(error){
		
		
		$scope.status = $sce.trustAsHtml('ERROR: ' + error);
		
		
	});
	    
	
		
		
	}
	
	
	$scope.click = function(string){
		
		
		alert(1);

    var stack = [];
    
  var length = string.length();
  
  
  for(var i = 0; i<= length; i++){
      var current = string.charAt(i);
      if (["(", "[", "{"].indexOf(current) != -1 ){
          stack.push(current);
      } else if ([")", "]", "}"].indexOf(current) != -1 && i != 1){ 
          
          var previousChar = stack.pop(); // {
          if(previousChar == '{' && (current == '}' || current == '{')){
              
              status = 'valid';
              
          } else if(previousChar == '[' && (current == ']' || current == '[')){
              status = 'valid';
              
          } else if(previousChar == '(' && (current == ')' || current == '(')){
              status = 'valid';
              
          } else {
              
            status = 'invalid';
          }
      } else {
          
          status = 'invalid';
      }
      
      
      return status;
  }
    

	
	
	
	
	
	
});

app.factory("service1", function($q){
	
	function dbExist(){
		
	  var status = Math.random() > 0.3;
	  
	  return status ? $q.resolve("<br> Db exist") : $q.reject("<br> Db doesnt exist");
		
		
	}
	
	
	function createTable(data){
		var status = Math.random() > 0.3;
		return status ? $q.resolve(data+"<br> Table created") : $q.reject(data+"<br> Error creating table");
	}
	
	function insertDate(data){
		var status = Math.random() > 0.3;
		return status ? $q.resolve(data+"<br> Data saved") : $q.reject(data+"<br> Error saving data");
	}
	
	
	return {
		
		dbExist: dbExist,
		createTable: createTable,
		insertDate: insertDate
		
	}
	
});