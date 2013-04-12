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
			location: "./libs/handlebars/dist",
			main: "handlebars"
		},
		{
			name: "underscore",
			location: "./libs/underscore",
			main: "underscore-min"
		},
		{
			name: "faker",
			location: "./libs/fakerjs",
			main: "Faker"
		}
	]
});

define(['configurator'] , function(configurator){
	var inst = configurator.getInstance();
	inst.addRow();

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

	$('#generate')
	.click(function(){
		localStorage.result = JSON.stringify(inst.generateFakeData() , null , '\t');
		window.open(location.origin + '/result.html');
	})
});