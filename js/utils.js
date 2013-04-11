define(function(){
	return {
		getParams: function(func){
			if(typeof func != 'function'){
				return null;
			}

			var funcStr	= func.toString(),
				start	= funcStr.indexOf('('),
				end		= funcStr.indexOf(')'),
				res 	= funcStr.substring(start + 1,end).trim();

			for (var i = res.length - 1; i >= 0; i--) {
				if(!res[i]){
					res.splice(i,i);
				}
			};

			return res;
		}
	}
})