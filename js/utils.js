define(['faker'] , function(faker){
	function Configurator(){
		this.key 	= null;
		this.value	= null;
		this.apis	= {};
	}
	
	Configurator.instance = null;
	
	Configurator.getInstance = function() {  
		if (this.instance == null) {
			this.instance = new Configurator();
			this.instance.init();
		}  

		return this.instance;
	}

	Configurator.prototype.init 	= function() {
		
	};

	Configurator.prototype.getValue = function() {
		return this.value;
	};

	Configurator.prototype.addAPI 	= function(apiName, apiFunc) {
		return this.apis[apiName] = apiFunc;
	};

	Configurator.prototype.removeAPI= function() {
		delete 
	};

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
		},
		getAll	: function(){
			var res 	= [],
				except	= ['definitions' , 'random' , 'version' , 'Helpers'];

			for (var i in faker) {
				if(except.indexOf(i) < 0){
					var obj = new Type();
					
					obj.key 	= i;
					obj.value 	= i;

					obj.setData(faker[i]);
					
					res.push(obj);
				}
			};

			return res;
		},
		getsubTypes	: function(type){
			var res 	= [],
				elem	= faker[type];

			for (var i in elem) {
				if(typeof elem[i] == 'function'){
					var obj = new Type();
					
					obj.key 	= i;
					obj.value 	= i;
					
					res.push(obj);
				}
			};

			return res;
		},
		getAll	: function(){
			var res 	= [],
				types 	= this.getTypes();

			for (var i = 0 , type ; type = types[i] ; i++) {
				var subTypes = this.getsubTypes(type.getValue());
			};

			return res;
		}
	}
})