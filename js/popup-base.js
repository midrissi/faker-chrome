require.config({
	baseUrl: "./js",
	optimize: "none",
	packages: [
		{
			name: "jquery",
			location: "./libs",
			main: "jquery"
		},
		{
			name: "handlebars",
			location: "./libs",//"./libs/handlebars/dist",
			main: "handlebars"
		},
		{
			name: "underscore",
			location: "./libs",//"./libs/underscore",
			main: "underscore-min"
		},
		{
			name: "faker",
			location: "./libs",//"./libs/fakerjs",
			main: "faker"
		},
		{
			name: "ext_faker",
			location: "./libs",//"./libs/fakerjs",
			main: "extended-faker"
		}
	]
});

define(['configurator'] , function(configurator){
	var inst = configurator.getInstance();
	window.inst = inst;
	// Init events
	$('#options tbody .removeBtn')
	.live({
		'click'	: function(){
			inst.removeRow($($(this).parents().get(1)).index());
		}
	});

	$('#options tbody .select-type')
	.live({
		'change'	: function(){
			inst.updateAPIs($($(this).parents().get(1)).index() , $(this).val())
		}
	});

	$('#add')
	.click(function(e){
		inst.addRow();
	});

	$('#save')
	.click(function(e){
		inst.saveConfig();
	});

	$('#load')
	.click(function(e){
		inst.loadConfig();
	});

	$('#init')
	.click(function(e){
		inst.initConfig();
	});

	$('#navigator')
	.click(function(e){
		if($(this).hasClass('definitions')){
			inst.loadView('home');
			$('a span' , $(this)).html('Definitions');
			inst.loadConfig();
		}
		else{
			inst.saveConfig();
			inst.loadView('definitions');
			$('a span' , $(this)).html('Home');
		}

		$(this)
		.add('#content')
		.toggleClass('definitions');
	});

	$('#definition')
	.live({
		change: function(){
			inst.refreshTags();
		}
	})

	$('#generate')
	.live({
		click: function(e){
			switch(true){
				case e.ctrlKey:
				case e.metaKey:
					inst.saveConfig();
			}
			
			localStorage.result = JSON.stringify(inst.generateFakeData() , null , '\t');
			window.open(location.origin + '/result.html');
		}
	});

	$('#saveDefs')
	.live({
		click: function(){
			inst.saveTags();
		}
	});

	function keycode(c){
		return c.charCodeAt(0);
	}

	$(document)
	.on({
		'keydown' : function(e){
			switch(true){
				case e.altKey && e.ctrlKey && e.keyCode == keycode('S') :
					inst.saveConfig();
					break;
				case e.altKey && e.ctrlKey && e.keyCode == keycode('N') :
					inst.addRow();
					break;
				case e.ctrlKey:
				case e.metaKey:
					$('#generate').html('Generate & Save');
					break;
			}
		},
		'keyup'	: function(e){
			switch(true){
				case !e.ctrlKey && e.keyCode == 17:
				case !e.metaKey && e.keyCode == 91:
					$('#generate').html('Generate');
			}
		}
	});
});