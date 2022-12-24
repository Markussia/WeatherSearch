function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2022,11,16); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = '<a href=""></a>';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('timer');
    elmnt.innerHTML = days +  '<span id="test"> : </span>' + hours + '<span> : </span>' + minutes + '<span> : </span>'+ seconds + "<span></span>";
    setTimeout(timer, 1000);

}

window.onload = function() {
    timer();
}
