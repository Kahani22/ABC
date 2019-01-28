(() => {
	let theButton = document.querySelector("#buttonHolder img")
	window.addEventListener("load, changeHeaderText");

	function changeHeaderText() {
		document.querySelector("h1").textContent = "Hey There!"
	}

theButton.addEventListener("click", changeHeaderText);

})();