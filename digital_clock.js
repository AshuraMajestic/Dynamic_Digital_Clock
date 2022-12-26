var d = new Date();
var hour = 0;
var minute = 0;
var second = 0;


setInterval(
    function() {
        d = new Date();
        hour = d.getHours();
        document.getElementById("area1").innerHTML = hour;
        if ((hour >= 6) && (hour < 12)) {
            document.getElementById("area1").style.backgroundImage = "url(day.png)";
            document.getElementById("body").style.backgroundImage = "url(mast_pic_day.png)";
        } else if ((hour >= 12) && (hour < 18)) {
            document.getElementById("area1").style.backgroundImage = "url(afternoon.png)";
            document.getElementById("body").style.backgroundImage = "url(mast_pic_afternoon.png)";
        } else {
            document.getElementById("area1").style.backgroundImage = "url(night.png)";
            document.getElementById("body").style.backgroundImage = "url(mast_pic_night.png)";
        }


        minute = d.getMinutes();
        document.getElementById("area2").innerHTML = minute;
        if ((hour >= 6) && (hour < 18)) {
            document.getElementById("area2").style.backgroundImage = "url(day_2.png)";
        } else if ((hour >= 12) && (hour < 18)) {
            document.getElementById("area2").style.backgroundImage = "url(afternoon_2.png)";
        } else {
            document.getElementById("area2").style.backgroundImage = "url(night_2.png)";
        }
        second = d.getSeconds();
        document.getElementById("area3").innerHTML = second;
        if ((hour >= 6) && (hour < 18)) {
            document.getElementById("area3").style.backgroundImage = "url(day_3.png)";
        } else if ((hour >= 12) && (hour < 18)) {
            document.getElementById("area3").style.backgroundImage = "url(afternoon_3.png)";
        } else {
            document.getElementById("area3").style.backgroundImage = "url(night_3.png)";
        }
        if ((hour >= 6) && (hour < 18)) {
            document.getElementById("area6").style.backgroundImage = "url(PM.png)"
        } else {
            document.getElementById("area6").style.backgroundImage = "url(AM.png)"
        }
    }, 1000
);
