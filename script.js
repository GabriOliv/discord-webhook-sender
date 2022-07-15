
function setWebhookPath() {

	let thread_id = document.getElementById("thread_id").value;

	if (thread_id != ""){

		let current_url = new URL(window.location.href);
		let params = new URLSearchParams(current_url.search);

		params.set("thread_id", thread_id);

		// Set # + webhook + ? + params
		window.location.hash = document.getElementById("webhook_url").value + "?" + params.toString();

	} else {
	
		// Set # + webhook
		window.location.hash = document.getElementById("webhook_url").value;

	}

	console.log(window.location.href);
}

function sendMsg() {
	if(window.location.hash) {

		let webhook_url = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

		let content_text = document.getElementById("content_text").value;
		let username_text = document.getElementById("username_text").value;
		let avatar_text = document.getElementById("avatar_text").value;
	
		// let params_url = (new URL(document.location)).searchParams;
		// let token = params_url.get("token");

		let request = new XMLHttpRequest();

		request.open("POST", webhook_url);
		request.setRequestHeader('Content-type', 'application/json');

		// INFO 996100965650407424
		// ERRO 996100568609210370
		let params = {
			avatar_url: avatar_text,
			content: content_text,
			username: username_text
		}

		console.log("sent to thread");
		request.send(JSON.stringify(params));
	} else {
		console.log("URL not set")		
	}
}


// ## Button Clear Keys
function clearAllUrlFields(){
	let str = "";

	document.getElementById("webhook_url").value = str;
	document.getElementById("thread_id").value = str;
}

// ## Button Clear Keys
function clearAllFormFields(){
	let str = "";

	document.getElementById("avatar_text").value = str;
	document.getElementById("content_text").value = str;
	document.getElementById("username_text").value = str;
}

