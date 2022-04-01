function cal() {
    let val = document.getElementById("secd").value;
    if (val === "" || isNaN(val)) {
        alert("Please enter the time in Seconds")
    } else {
        let years = 0
        let days = 0;
        let sec = val % 60
        let min = val / 60
        let hr = min / 60
        if (hr > 24) {
            days = hr / 24
            hr = hr % 24
        }
        if (min > 60) {
            min = min % 60
        };
        if (days > 365) {
            years = days / 365
            days = days % 365
        }
        document.getElementById("dis").innerHTML = ("Years:" + parseInt(years) + "&nbsp " + "Days:" + parseInt(days) + "&nbsp " + "Hours:" + parseInt(hr) + "&nbsp " +
            "Minunts:" + parseInt(min) + "&nbsp " + "Seconds:" + (sec))
        document.getElementById("dis2").innerHTML = "Thank You"
    }
}