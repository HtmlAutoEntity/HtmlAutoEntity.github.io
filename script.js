function convertText() {
    let inputText = document.getElementById("inputText").value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        switch (charCode) {
            case 33: // !
                outputText += "&#33;";
                break;
            case 34: // "
                outputText += "&#34;";
                break;
            case 35: // #
                outputText += "&#35;";
                break;
            case 36: // $
                outputText += "&#36;";
                break;
            case 37: // %
                outputText += "&#37;";
                break;
            case 38: // &
                outputText += "&amp;";
                break;
            case 39: // '
                outputText += "&#39;";
                break;
            case 40: // (
                outputText += "&#40;";
                break;
            case 41: // )
                outputText += "&#41;";
                break;
            case 42: // *
                outputText += "&#42;";
                break;
            case 43: // +
                outputText += "&#43;";
                break;
            case 44: // ,
                outputText += "&#44;";
                break;
            case 45: // -
                outputText += "&#45;";
                break;
            case 46: // .
                outputText += "&#46;";
                break;
            case 47: // /
                outputText += "&#47;";
                break;
            case 123: // {
                outputText += "&#123;";
                break;
            case 124: // |
                outputText += "&#124;";
                break;
            case 125: // }
                outputText += "&#125;";
                break;
            case 126: // ~
                outputText += "&#126;";
                break;
            default:
                outputText += inputText.charAt(i);
                break;
        }
    }
    document.getElementById("outputText").value = outputText;
}

function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");

    // Show copy feedback
    let feedback = document.createElement("div");
    feedback.classList.add("copy-feedback");
    feedback.textContent = "Copied to clipboard!";
    document.body.appendChild(feedback);

    // Hide copy feedback after 2 seconds
    setTimeout(() => {
        feedback.classList.add("fade-out");
        setTimeout(() => {
            feedback.remove();
        }, 500);
    }, 2000);
}