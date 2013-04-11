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
			name: "mustache",
			location: "./libs",
			main: "mustache"
		},
		{
			name: "handlebars",
			location: "./libs",
			main: "handlebars"
		},
		{
			name: "underscore",
			location: "./libs",
			main: "underscore-min"
		},
		{
			name: "faker",
			location: "./libs",
			main: "faker"
		}
	]
});

/*{
	attributes	: [
		{
			first
		}
	]
}*/

define(['jquery' , 'faker'] , function($ , faker){
	var result = [];

	for (var i = 20000 ; i >= 0; i--) {
		result.push({
			name: 'Employee ' + i,
			salary: Math.floor(Math.random()*10000),
			url: 'http://www.google.com'
		});
	};

	debugger;

	require(['template'] , function(){
		Template('parameters', {items : result}, function(html) {
			$('body').html(html);
        } , ['error' , 'hi'] , {
        	link_to: function(context) {
        		return "<a href='" + context.url + "'>" + context.name + "</a>";
			}
		});
	});
});