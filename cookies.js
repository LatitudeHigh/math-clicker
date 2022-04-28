function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    // console.log(cname + "=" + cvalue + ";" + expires + ";path=/");
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    // console.log(cname)
    let name = cname + "=";
    let ca = document.cookie.split(';');
    // console.log(ca);
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        // console.log(c);
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // console.log(c.substring(name.length, c.length))
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function setCookieScore(score) {
    setCookie("mathClickerScore", score, 7);
}


function getCookieScore() {
    let score = getCookie("mathClickerScore");
    console.log(score);
    if(score == "") {
        setCookieScore(0);
        return 0;
    } else {
        return parseInt(score);
    }
}