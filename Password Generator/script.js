//* 1. Initialize the variables
const generate = document.querySelector(".generate");
const outputData = document.querySelector(".output");

//* 2. Create password generator function
const passwordGenerator = () => {
    let password = "";
    let passwordLength = Math.floor((Math.random() * 4) + 8);

    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-./:;<=>?+";

    for(let i = 0; i <= passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
};

//* 3. Create click event on button
generate.addEventListener("click", event => {
    const password = passwordGenerator();
    outputData.textContent = password;
    outputData.style.visibility = "visible";
    outputData.classList.remove("resultData");
    outputData.classList.add("outputData");

    outputData.addEventListener("click", event => {
        outputData.textContent = "PASSWORD COPIED";
        outputData.classList.replace("outputData", "resultData");
        copyToClipboard(password);
    })
});

//* 4. Create function for copy functionality
function copyToClipboard(password) {
    var textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    navigator.clipboard.writeText(password);
    document.body.removeChild(textarea);
}