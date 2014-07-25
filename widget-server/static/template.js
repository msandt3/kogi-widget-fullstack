<script id="beer-template" class="template">

	<ul>
		<% _.each(data,function(item){ %> 
			<li><%= item.name %></li>
		<% }); %>
	</ul>
	
</script>