//* 1. Initialize all the variables
const generate = document.querySelector(".generate");
const outputData = document.querySelector(".outputData");

//* 2. Create OTP generate function
const OTPGenerate = () => {
    let otp = "";
    let otpLength = 6;
    let characters = "0123456789";
    for(let i = 0; i < otpLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }
    return otp;
}

//* 3. Create click event on button
generate.addEventListener("click", event =>{
    const otp = OTPGenerate();
    outputData.textContent = otp;
    outputData.classList.replace("resultData", "outputData");
    outputData.style.visibility = "visible";

    // Create click event on output element
    outputData.addEventListener("click", event =>{
        outputData.textContent = "OTP COPIED";
        outputData.classList.add("resultData");
        copyToClipboard(otp);
    });
});

//* 4. Create copy functionality
function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    navigator.clipboard.writeText(otp);
    document.body.removeChild(textarea);
}