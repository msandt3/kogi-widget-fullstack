/*
	widget.js -- an example for loading in widets via script tags
*/

// ==============================================================
// Load jQuery and Underscore
// ==============================================================

(function(){

	// ================================= Set Up Globals ============================================
	var jQuery;
	var Underscore;


	loadScripts();
	
	

	// ================================== Helper Methods =============================================
	function loadScripts(){
		loadjQuery();
		
	}

	function loadjQuery(){
		if(window.jQuery === undefined || window.jQuery.fn.jquery !== '1.11.1'){
		console.log('Loading jQuery');
		var script_tag = document.createElement('script');
		script_tag.setAttribute('type','text/javascript');
		script_tag.setAttribute('src','//code.jquery.com/jquery-1.11.0.min.js');

		if(script_tag.readyState){
			script_tag.onreadystatechange = function(){
				if(this.readyState == 'complete' || this.readyState == 'loaded'){
					jqueryLoadHandler();
				}
			}
		}else{
			script_tag.onload = jqueryLoadHandler;
		}
		console.log(script_tag);
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

		}else{
			jQuery = window.jQuery;
		}
	}

	function loadUnderscore(){
		if(window._ === undefined){
			console.log('Underscore');
			var underscore_tag = document.createElement('script');
			underscore_tag.setAttribute('type','text/javascript');
			underscore_tag.setAttribute('src','//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js');

			if(underscore_tag.readyState){
				underscore_tag.onreadystatechange = function(){
					if(this.readyState == 'complete' || this.readyState == 'loaded'){
						underscoreLoadHandler();
					}
				}
			}
			else{
				underscore_tag.onload = underscoreLoadHandler();
			}

			document.head.appendChild(underscore_tag);
			console.log('appended');
		}else{
			Underscore = window._;
			console.log(Underscore);
		}
	}


	function jqueryLoadHandler(){
		console.log(window.jQuery);
		jQuery = window.jQuery.noConflict(true);
		// loadUnderscore();
		main();
	}

	function underscoreLoadHandler(){
		console.log(window._);
		// Underscore = window._.noConflict(true);
		// console.log(Underscore);
	}

	function main(){
		jQuery(document).ready(function($){
			console.log($().jquery);
			var api_url = 'http://localhost:8080/api/beers?callback=?';
			// console.log(Handlebars);
			$.getJSON(api_url,function(data){
				$.each(data,function(key,value){
					$('#widget').append('<div class="">'+value.name+'</div>');
				});
			});
		});
	}

	// ============================ Underscore Templates  ==========================================
	var beers = "<ul><% Underscore.each(data,function(item){ %> <li><%= item.name %></li><% }); %></ul>";

})();
