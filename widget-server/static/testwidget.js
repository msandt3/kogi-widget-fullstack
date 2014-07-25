(function () {
 
    var scriptName = "embed.js"; //name of this script, used to get reference to own tag
    var jQuery; //noconflict reference to jquery
    var jqueryPath = "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"; 
    var jqueryVersion = "1.8.3";
    var scriptTag; //reference to the html script tag
    var _; //underscorejs
    var server = 'http://109.74.206.207:8080/v1/';
 
    /******** Get reference to self (scriptTag) *********/
    var allScripts = document.getElementsByTagName('script');
    var targetScripts = [];
    for (var i in allScripts) {
        var name = allScripts[i].src
        if(name && name.indexOf(scriptName) > 0)
            targetScripts.push(allScripts[i]);
    }
 
    scriptTag = targetScripts[targetScripts.length - 1];
 
    /******** helper function to load external scripts *********/
    function loadScript(src, onLoad, id) {
        id = id || null;
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", src);
        if(id != null){
            script_tag.setAttribute("id",id);
        }
 
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () {
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    onLoad();
                }
            };
        } else {
            script_tag.onload = onLoad;
        }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    }
 
    /******** helper function to load external css  *********/
    function loadCss(href) {
        var link_tag = document.createElement('link');
        link_tag.setAttribute("type", "text/css");
        link_tag.setAttribute("rel", "stylesheet");
        link_tag.setAttribute("href", href);
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(link_tag);
    }
 
    /******** load jquery into 'jQuery' variable then call main ********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== jqueryVersion) {
        loadScript(jqueryPath, initjQuery);
    } else {
        initjQuery();
    }
 
    function initjQuery() {
        jQuery = window.jQuery.noConflict(true);
        main();
    }
 
    /******** starting point for your widget ********/
    function main() {
      //your widget code goes here
	
        jQuery(document).ready(function ($) {          
          
            /* Load in Underscore*/
            loadScript("//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js", function() { 
                _ = window._.noConflict(true);
            });

            /* Load in Pure Css Styles */
            loadCss("//cdnjs.cloudflare.com/ajax/libs/pure/0.5.0/pure-min.css");
    

            // ==================== Load Login Form & Attach Handlers ========================
            $('#widget').load('http://localhost:3000/static/template.html',null,function(data){


                $('#login-form').on('submit',function(e){
                    e.preventDefault();
                    // Now lets send of an AJAX request to login
                    var postData = {
                        username: $('#username').val(),
                        password: $('#password').val(),
                        grant_type: 'password',
                        client_id: 'anything'
                    }

                    console.log(postData);
                    $.post('http://localhost:3000/api/login',postData,function(data){
                        alert('Logged In Successfully! Be patient, more views coming soon')
                        console.log(data);
                    });
                });


            });
            
        });
		
    }

 
})();