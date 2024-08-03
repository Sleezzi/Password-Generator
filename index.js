const text = "Easily generate random passwords in your browser";
let i = 0;
document.querySelector("#typingContainer h1").innerText = "";
function typeWriter() {
    if (i < text.length) {
        document.querySelector("#typingContainer h1").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();