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

function setCookieMultiplier(multiplier) {
    setCookie("mathClickerMultiplier", multiplier, 7);
}


function getCookieMultiplier() {
    let multiplier = getCookie("mathClickerMultiplier");
    console.log(multiplier);
    if(multiplier == "") {
        setCookieMultiplier(1);
        return 1;
    } else {
        return parseInt(multiplier);
    }
}

function setCookieNumOne(numOne) {
    setCookie("mathClickerNumOne", numOne, 7);
}


function getCookieNumOne() {
    let numOne = getCookie("mathClickerNumOne");
    console.log(numOne);
    if(numOne == "") {
        setCookieNumOne(0);
        return 0;
    } else {
        return parseInt(numOne);
    }
}

function setCookieNumTwo(numTwo) {
    setCookie("mathClickerNumTwo", numTwo, 7);
}


function getCookieNumTwo() {
    let numTwo = getCookie("mathClickerNumTwo");
    console.log(numTwo);
    if(numTwo == "") {
        setCookieNumTwo(0);
        return 0;
    } else {
        return parseInt(numTwo);
    }
}

function setCookieNumSix(numSix) {
    setCookie("mathClickerNumSix", numSix, 7);
}


function getCookieNumSix() {
    let numSix = getCookie("mathClickerNumSix");
    console.log(numSix);
    if(numSix == "") {
        setCookieNumSix(0);
        return 0;
    } else {
        return parseInt(numSix);
    }
}

function setCookieNumEight(numEight) {
    setCookie("mathClickerNumEight", numEight, 7);
}


function getCookieNumEight() {
    let numEight = getCookie("mathClickerNumEight");
    console.log(numEight);
    if(numEight == "") {
        setCookieNumEight(0);
        return 0;
    } else {
        return parseInt(numEight);
    }
}

function setCookieThreeBought(threeBought) {
    setCookie("mathClickerThreeBought", threeBought, 7);
}


function getCookieThreeBought() {
    let threeBought = getCookie("mathClickerThreeBought");
    console.log(threeBought);
    if(threeBought == "" || threeBought == false) {
        setCookieThreeBought(false);
        return false;
    } else {
        return threeBought == "true";
    }
}

function setCookieFourBought(fourBought) {
    setCookie("mathClickerFourBought", fourBought, 7);
}


function getCookieFourBought() {
    let fourBought = getCookie("mathClickerFourBought");
    console.log(fourBought);
    if(fourBought == "" || fourBought == false) {
        setCookieFourBought(false);
        return false;
    } else {
        return fourBought == "true";
    }
}

function setCookiePicklesBought(picklesBought) {
    setCookie("mathClickerPicklesBought", picklesBought, 7);
}


function getCookiePicklesBought() {
    let picklesBought = getCookie("mathClickerPicklesBought");
    console.log(picklesBought);
    if(picklesBought == "" || picklesBought == false) {
        setCookiePicklesBought(false);
        return false;
    } else {
        return picklesBought == "true";
    }
}

function setCookieSevenBought(sevenBought) {
    setCookie("mathClickerSevenBought", sevenBought, 7);
}


function getCookieSevenBought() {
    let sevenBought = getCookie("mathClickerSevenBought");
    console.log(sevenBought);
    if(sevenBought == "" || sevenBought == false) {
        setCookieSevenBought(false);
        return false;
    } else {
        return sevenBought == "true";
    }
}

function setCookieNineBought(nineBought) {
    setCookie("mathClickerNineBought", nineBought, 7);
}


function getCookieNineBought() {
    let nineBought = getCookie("mathClickerNineBought");
    console.log(nineBought);
    if(nineBought == "" || nineBought == false) {
        setCookieNineBought(false);
        return false;
    } else {
        return nineBought == "true";
    }
}