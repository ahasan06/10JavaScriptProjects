function clock() {
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let today = new Date();
    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear());

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let hour  = h -  12;
    let day = h < 11 ? 'AM' : 'PM';
    
    h = h > 12 ?  hour : h;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.getElementById("hours").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
    document.getElementById("day").innerHTML = day;

    setInterval(clock, 400);   
}

clock();
