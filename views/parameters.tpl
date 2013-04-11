<table>
	<thead>
		<th>Name</th>
		<th>Type</th>
		<th>Parameters</th>
	</thead>
	<tbody>
		{{#items}}
		<tr>
			<td>{{name}}</td>
			<td>{{salary}}</td>
			<td>{{{link_to this}}}</td>
		</tr>
		{{/items}}
	</tbody>
</table>

{
	attributes	: {
		firstname: {
			type: firstname
		}
	}
}