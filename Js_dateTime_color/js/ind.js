var calendar = () => {
    let day = new Date();
    let si = day.getDay();
    let mon = day.getMonth();
    let allDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let allMonth = ['January', 'February', 'March', 'April', 'May', 'Jun',
        'July', 'August', 'Setember', 'October', 'November', 'December'];

    let sil = '';
    let month = '';
    let year = day.getFullYear();
    for (let i = 0; i < allDay.length; i++) {
        switch (si) {
            case i:
                sil = allDay[i];
                break;
        }
    }
    for (let i = 0; i < allMonth.length; i++) {
        switch (mon) {
            case i:
                month = allMonth[i];
                break;
        }
    }
    let date = day.getDate().toString();
    if (date.length < 2) {
        date = '0' + date;
    }

    let top = '';
    switch(day.getDate()){
        case 1:
        case 21:
        case 31:
            top = 'st';
            break;
        case 2:
        case 22:
            top = 'nd';
            break;
            case 1:
        case 3:
        case 23:
            top = 'rd';
            break;
            case 1:
       default:
            top = 'th';

    }
    let result = document.getElementById("date");
    result.innerHTML = date + '<sup>' + top + '</sup>' + ' ' + sil + " " + month + " " + year;

}
calendar();
var timer = () => {
    let time = new Date();
    let hour = time.getHours().toString();
    let minute = time.getMinutes().toString();
    let second = time.getSeconds().toString();

    if (hour.length < 2) {
        hour = '0' + hour;
    }

    if (minute.length < 2) {
        minute = '0' + minute;
    }

    if (second.length < 2) {
        second = '0' + second;
    }
    if (time.getHours() < 12) {
        document.querySelector('h3').innerHTML = time.getHours() + ':' + minute + ':' + second + ' ' + 'AM';
        document.querySelector('h2').innerHTML = 'Good Morning SILA' ;
        document.body.style.background = "url(img/everning.jpg) center/cover no-repeat";
    } else {
        document.querySelector('h3').innerHTML = time.getHours() + ':' + minute + ':' + second + ' ' + 'PM';
        document.querySelector('h2').innerHTML = 'Good Afternoon SILA';
        document.body.style.background = 'url(img/afternoon.png)  no-repeat';
    }
    var color = () => {
        let dates = document.querySelector("h2");
        let date = document.querySelector("h3");
        let datese = document.querySelector("h1");
        if( dates.style.color=="cyan"
        , date.style.color=="cyan"
        ,datese.style.color=="cyan"){
            dates.style.color = "green";
            date.style.color = "green";
            datese.style.color = "green";
        }else{
            dates.style.color = "cyan";
            date.style.color = "cyan";
            datese.style.color = "cyan";
        }
    }
    setInterval(color,3000);
    setInterval(calendar,3000);

    
}
setInterval(timer, 1000);
