
const showString = document.querySelector("#captchaString");
const newCode = document.querySelector("#newCode");
const msg = document.querySelector("#msg");
const btnSubmit = document.querySelector("#btnSubmit");


window.onload = function () {
    getCaptchaCode();
};

btnSubmit.addEventListener('click', () => {
    validateCode();
    userInput.disabled = true;
}
);

newCode.addEventListener('click', () => {
    getCaptchaCode();
    userInput.disabled = false;
    document.getElementById("userInput").value = "";
    msg.innerText = "";
}
);

// generate captcha code
function getCaptchaCode() {
    const charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'j', 'k', '0', 'l', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'v', 'w', 'x', 'y', 'z'];

    const char1 = charArray[Math.floor(Math.random() * 61)];
    const char2 = charArray[Math.floor(Math.random() * 61)];
    const char3 = charArray[Math.floor(Math.random() * 61)];
    const char4 = charArray[Math.floor(Math.random() * 61)];
    const char5 = charArray[Math.floor(Math.random() * 61)];
    const char6 = charArray[Math.floor(Math.random() * 61)];

    const captcha = char1 + char2 + char3 + char4 + char5 + char6;
    showString.innerHTML = captcha;
    document.getElementById("captchaString").value = captcha;
}

//code validation
function validateCode() {
    const userText = document.getElementById("userInput").value;

    const cptchCode = document.getElementById("captchaString").value;

    if (userText.length < 6 || userText.length > 7) {
        msg.innerText = "Enter 6 charater,now get new code!";
        msg.style.color = "#894bee";
    }
    else if (userText === cptchCode) {
        msg.innerText = " You are not robot!";
        msg.style.color = "green";
    } else {
        msg.innerText = "Invalid code, Try again!"
        msg.style.color = "red";
    }

}
