const generate = (length) => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890&é#{([-è_ç^à@)]+=}*-|.?:!;%$µ§/";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.querySelector("div#result").innerText = result;
}
document.querySelector("button#generate").onmouseup = () => {
    generate(document.querySelector("input#length").value);
    localStorage.setItem("length", document.querySelector("input#length").value);
}

if (localStorage.getItem("length")) {
    document.querySelector("input#length").value = localStorage.getItem("length");
}

document.querySelector("button#copy").onmouseup = () => {
    navigator.clipboard.writeText(document.querySelector("div#result").innerText);
    document.querySelector("button#copy").innerText = "Copied";
    setTimeout(() => {
        if (document.querySelector("button#copy").innerText === "Copied") {
            document.querySelector("button#copy").innerText = "  Copy  ";
        }
    }, 1_000);
}

generate(document.querySelector("input#length").value);