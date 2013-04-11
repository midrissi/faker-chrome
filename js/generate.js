define(function(){
	return {
		getResult: function(){
			//Not yet implemented!
		},
		execute: function(){
			localStorage.result = JSON.stringify(this.getResult() , null , '\t');
			window.open(location.origin + '/result.html');
		}
	}
})