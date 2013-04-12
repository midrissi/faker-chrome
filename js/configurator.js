define(['ext_faker' , 'jquery' , 'template'] , function(faker , $){
	function Row(row){
		if(typeof row == 'number'){
			this.config = Configurator.getInstance();
			this.$dom 	= this.config.get$Row(row);
		}
		else{
			this.$dom 	= row;
		}
		
		this.$type 		= this.$dom.find('.select-type');
		this.$subType 	= this.$dom.find('.select-subType');
		this.$name 		= this.$dom.find('.input-name');
	}

	Row.prototype.getType = function() {
		return this.$type.val();
	};

	Row.prototype.getSubType = function() {
		return this.$subType.val();
	};

	Row.prototype.getName = function() {
		return this.$name.val();
	};

	Row.prototype.refreshSubTypes = function() {
		var that 		= this,
			attributes	= this.config.getAPIs(that.getType());

		Template('options', {attributes : attributes}, function(html) {
			that
			.$subType
			.empty()
			.append($(html));
        });
	};

	function Configurator(){
		if ( Configurator.caller != Configurator.getInstance ) {  
			throw new Error("This object cannot be instanciated");  
		}

		this.faker 	= [];
		this.columns= [];
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
		var except	= ['definitions' , 'random' , 'version' , 'Helpers'];

		for (var i in faker) {
			if(except.indexOf(i) < 0){
				var obj = {
					key			: i,
					value 		: i,
					attributes	: []
				};
				
				for(var j in faker[i]){
					var attr = faker[i][j];
					if(typeof attr == 'function'){
						obj.attributes.push({
							key		: j,
							value 	: j
						});
					}
				}

				this.faker.push(obj);
			}
		};
	};

	Configurator.prototype.addRow = function(){
		var types 		= this.faker,
			subTypes	= types[0].attributes,
			rows 		= $('#options tbody tr');

		Template('parameters', {types : types , subTypes : subTypes , attrName : 'attr' + rows.length}, function(html) {
			var $row = $(html);

			$row
			.appendTo($('#options tbody'))
			.find('input[type=text]')
			.focus();
	    });
	}

	Configurator.prototype.getLength = function(){
		return $('#length').val();
	}

	Configurator.prototype.get$Row = function(index){
		return $($('#options tbody tr').get(index));
	}

	Configurator.prototype.removeRow = function(index){
		var rows = $('#options tbody tr');

		if(rows.length < 2){
			// Do nothing !
		}
		else{
			var row = this.get$Row(index);
			row.remove();
		}
	}

	Configurator.prototype.getAPIs = function(type){
		for (var i = this.faker.length - 1; i >= 0; i--) {
			if(this.faker[i].value == type){
				return this.faker[i].attributes;
			}
		};
	}

	Configurator.prototype.updateAPIs = function(index){
		var row = new Row(index);
		row.refreshSubTypes();
	}

	Configurator.prototype.updateAPIs = function(index){
		var row = new Row(index);
		row.refreshSubTypes();
	}

	Configurator.prototype.getConfig = function(){
		var rows 	= $('#options tbody tr'),
			result	= {
				length 	: this.getLength(),
				columns	: {}
			};

		for (var i = rows.length - 1; i >= 0; i--) {
			var row 	= rows.get(i),
				rowObj	= new Row($(row));

			result.columns[rowObj.getName()] = {
				attrSubType : rowObj.getSubType(),
				attrType 	: rowObj.getType()
			};
		};

		return result;
	}

	Configurator.prototype.generateFakeData = function(){
		var config 	= this.getConfig(),
			res 	= [];

		for (var i = 0; i < config.length ; i++) {
			var obj = {};

			for(var attr in config.columns){
				var col = config.columns[attr],
					func= faker[col.attrType] ? (faker[col.attrType][col.attrSubType] ? faker[col.attrType][col.attrSubType] : null) : null;

				if(typeof func == 'function'){
					obj[attr] = func.call(faker[col.attrType]);
				}
			}

			res.push(obj);
		};

		return res;
	}

	return Configurator;
});