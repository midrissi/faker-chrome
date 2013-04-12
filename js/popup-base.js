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
	inst.addRow();
	inst.loadConfig();

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

	$('#generate')
	.click(function(){
		localStorage.result = JSON.stringify(inst.generateFakeData() , null , '\t');
		window.open(location.origin + '/result.html');
	});
});