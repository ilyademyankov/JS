var flag=1;

function load_page(path,folder,type,param,div) {
	var cont = document.getElementById(div);
	var loading = "<div class=load_module>Loading...</div>";
	cont.innerHTML = loading;
	var http = createRequestObject();
    http.caching = false;
	if (http.overrideMimeType) { 
        http.overrideMimeType('text/html; charset=utf8');
    }
if( http ) 
{
   
	http.open('get',path+'/'+folder+'/'+type+'.php'+param, true);
	http.onreadystatechange = function () 
	{
		if(http.readyState == 4) {
		  if (http.status == 200) {
            cont.innerHTML = http.responseText;
            
    var myScripts = cont.getElementsByTagName("script");
    
    if (myScripts.length > 0) {
      k=myScripts.length; 
      for (i=0;i<k;i++){eval(myScripts[i].innerHTML);}
                }
          } else {
            cont.innerHTML = "Loading... " + http.status;

          }    
		}
	}
	http.send(null); 
	
}
else 
{
	document.location = link;
}
}




function createRequestObject() 
{
try { return new XMLHttpRequest() }
catch(e) 
{
	try { return new ActiveXObject('Msxml2.XMLHTTP') }
	catch(e) 
	{
		try { return new ActiveXObject('Microsoft.XMLHTTP') }
		catch(e) { return null; }
	}
}
}
