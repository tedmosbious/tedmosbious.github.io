let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

btn1.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=1&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=2&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=3&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=4&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=5&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=6&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
	

});

btn7.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=7&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 7!");
		item = "7";
		tg.MainButton.show();
	}
	

});

btn8.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=8&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 8!");
		item = "8";
		tg.MainButton.show();
	}
	

});

btn9.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=9&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 9!");
		item = "9";
		tg.MainButton.show();
	}
	

});

btn0.addEventListener("click", function(){
	$.ajax("https://api.telegram.org/bot5554637689:AAEud0-MIDX0h9ozrdNqPmoLILCwki102j4/sendMessage?text=0&chat_id=2053847245");
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 0!");
		item = "0";
		tg.MainButton.show();
	}
	

});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}${tg.initDataUnsafe.user.photo_url}`;


usercard.appendChild(p); 





