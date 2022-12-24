const p = document.querySelector('#p')
const p1 = document.querySelector('#p1')
const p2 = document.getElementById("p2");
var days = ["Воскресенье","Понедельник", "Вторник", "Среда", "Четверг", "Пятница","Суббота"];
             
var myDate = new Date();
var fullDate = days[myDate.getDay()];
var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
var full = months [myDate.getDay];

             
var myDate = new Date();
var fullDatte = myDate.getDate() + " " + months[myDate.getMonth()];

p.innerHTML = fullDate;
p2.innerHTML = fullDatte;
