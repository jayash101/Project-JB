//* 1. Initialize the variables
const captchaShow = document.querySelector(".captchaShow");
const verifyInput = document.querySelector(".verifyInput");
const verifyButton = document.querySelector(".verifyButton");
const output = document.querySelector(".output");
const refresh = document.querySelector(".refresh");

//* 2. Create captcha generator function
const captchaGenerator = () => {
    let captcha = "";
    const captchaLength = 6;
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for(let i = 0; i < captchaLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }

    return captcha;
};

//* 3. Default Captcha and Refresh Event
captchaShow.textContent = captchaGenerator();
refresh.addEventListener("click", event => {
    captchaShow.textContent = captchaGenerator();
})

//* 4. Create click event on verify button and validation
verifyButton.addEventListener("click", event => {
    if(verifyInput.value === captchaShow.textContent){
        output.textContent = "Verification Successful";
        output.classList.remove("incorrect");
        output.classList.add("correct");
    }
    else{
        output.textContent = "Incorrect CAPTCHA";
        output.classList.remove("incorrect");
        output.classList.add("incorrect");
    }
})