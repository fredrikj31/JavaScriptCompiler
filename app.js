const textArea = document.getElementById("codeText");

function runCode() {
	const script = document.createElement("script");

	document.getElementById("output").contentWindow.document.write(textArea.value);
}