function XHR_request(URL, async, params, functions)
{
	var XHR = new XMLHttpRequest();
        
	function loadstart(evt)
	{
		functions['loadstart'](evt);
	}
	
	function progress(evt)
	{
		functions['progress'](evt);
	}
	
	function load(evt)
	{
		var response = XHR.responseText;
		functions['load'](evt, response);
	}
	
	function abort(evt)
	{
		functions['abort'](evt);
	}
	
	function error(evt)
	{
		functions['error'](evt);
	}

	XHR.addEventListener('loadstart', loadstart, false);
	XHR.addEventListener('progress', progress, false);
	XHR.addEventListener('load', load, false);
	XHR.addEventListener('abort', abort, false);
	XHR.addEventListener('error', error, false);

	XHR.open('POST', URL, async);
	XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//XHR.setRequestHeader('Content-length', params.length);
	//XHR.setRequestHeader('Connection', 'close');
	XHR.send(params);
}


