function generateColor() {
    // generate a random hexadecimal color code
    var colorCode = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // change the background color of the page to the new color
    document.body.style.backgroundColor = colorCode;

    // display the color code in the "Copy Color Code" button
    var copyBtn = document.getElementById("copy-btn");
    copyBtn.innerText = colorCode;
    copyBtn.dataset.colorCode = colorCode;
}

function copyToClipboard() {
    // copy the color code to the clipboard
    var copyBtn = document.getElementById("copy-btn");
    var colorCode = copyBtn.dataset.colorCode;
    navigator.clipboard.writeText(colorCode);
    alert("Color code copied to clipboard!");
}

var colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", generateColor);