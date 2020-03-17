var close = document.getElementsByClassName('close');

//создавать новый элемент списка при нажание на кнопку "Add"
function newElement() {
let li = document.createElement("li");
let inputValue = document.getElementById("myInput").value;
let text = document.createTextNode(inputValue);
li.appendChild(text);
//проверка
if (inputValue === ''){
    alert("Родной, напиши, хоть что-нибудь");
} else {
    document.getElementById("myUL").appendChild(li);
}
    document.getElementById("myInput").value = "";
// удаляет элементы
let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
         }
    }

}