// This was a beautifully failed attempt
// to not load all stylesheets at once.

function LoadStyle(url) {
	let element = document.createElement("link");
	element.setAttribute("rel", "stylesheet");
	element.setAttribute("type", "text/css");
	element.setAttribute("href", url);

	document.getElementsByTagName("head")[0].appendChild(element);

	console.log(`Loaded style for ${url}`)
}