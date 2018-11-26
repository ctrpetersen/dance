const inputArea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('inputText');
const outputArea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('outputText');
inputArea.addEventListener('input', function () { GenerateText(); });

function GenerateText() {
    var input = inputArea.value;
    console.log(input)
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == ' ') {
            output += "    "
        }
        else {
            output += ":" + input.charAt(i).toUpperCase() + "dance:";
        }
    }
    outputArea.value = output;
}

