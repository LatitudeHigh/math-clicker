// State variables that control our program
var ball;

var titleText;
var newText;
var continueText;

var score;
var multiplier;
var atShop;
var atBall;
var txt;

var oneCost;
var twoCost;
var sixCost;
var eightCost;

var threeBought;
var fourBought;
var picklesBought;
var sevenBought;
var nineBought;

var numOne;
var numTwo;
var numSix;
var numEight;

var responseTxt;

//all items in one set
var items = {};

var questionTxt;
var answerTxt;
var answer;

var lobbySong;
var shopSong;
var chaChing;
var clickSound;

var questionRight;

var shopRect;
var homeRect;
var shopText;
var homeText;
var rectColor;

//it indeed updates the score
function updateScore(newScore) {
    score = newScore;
    setCookieScore(newScore);
}

//when you clicc you get point
function click(e) {
    elem = getElementAt(e.getX(), e.getY());
    if(atBall == true && elem == ball) {
        ball.setColor(Randomizer.nextColor());
        updateScore(score + 1 * multiplier);
        txt.setText("Money: " + score);
        txt.setPosition(
            (getWidth() - txt.getWidth()) / 2,
            150
        );
        clickSound.play();
    }
    
    console.log(elem);
    if(elem == shopRect || elem == shopText){
        goToShop();
    }
    if(elem == homeRect || elem == homeText){
        goToBall();
    }
    if(elem == newText){
        remove(newText);
        remove(continueText);
        remove(titleText);
        add(txt);
        add(shopRect);
        add(shopText);
        add(homeRect);
        add(homeText);
        score = 0;
        numOne = 0;
        numTwo = 0;
        oneCost = 10;
        twoCost = 200;
        numSix = 0;
        numEight = 0;
        sixCost = 4000;
        eightCost = 8000;
        threeBought = false;
        fourBought = false;
        picklesBought = false;
        sevenBought = false;
        nineBought = false;
        atBall = true;
    }
    if(elem == continueText){
        remove(newText);
        remove(continueText);
        remove(titleText);
        add(txt);
        add(shopRect);
        add(shopText);
        add(homeRect);
        add(homeText);
        atBall = true;
    }
    if(elem == items.autoClicker && atShop == true && score >= oneCost){
        solveMultiplication();
        updateScore(score-oneCost);
        numOne = numOne + 1;
        oneCost = oneCost*2
        items.autoClicker.setText("Auto Clicker $" + oneCost);
    }
    if(elem == items.superClicker && atShop == true && score >= twoCost){
        solveMultiplication();
        updateScore(score-twoCost);
        numTwo = numTwo + 1;
        twoCost = twoCost*2
        items.superClicker.setText("Super Clicker $" + twoCost);
    }
    if(elem == items.doubleClicks && atShop == true && score >= 500 && threeBought == false){
        solveFractionAddition();
        updateScore(score-500)
        multiplier = multiplier*2
        items.doubleClicks.setText("SOLD OUT!");
        threeBought = true;
    }
    if(elem == items.tripleClicks && atShop == true && score >= 1000 && fourBought == false){
        solveFractionAddition();
        updateScore(score-1000);
        multiplier = multiplier*3;
        items.tripleClicks.setText("SOLD OUT!");
        fourBought = true;
    }
    if(elem == items.pickles && atShop == true && score >= 1000000 && !picklesBought){
        solveMultiplication();
        updateScore(score-1000000);
        var pickles = new WebImage("https://images.heb.com/is/image/HEBGrocery/000151575?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0");
        pickles.setSize(100, 100);
        pickles.setPosition(getWidth()/2 + getWidth()/4, getWidth()/2);
        add(pickles);
        items.pickles.setText("SOLD OUT!")
        picklesBought = true;
    }
    if(elem == items.ultraClicker && atShop == true && score >= sixCost){
        solveDecimalAddition();
        updateScore(score-sixCost);
        numSix = numSix + 1;
        sixCost = sixCost * 2;
        items.ultraClicker.setText("Ultra Clicker $" + sixCost);
    }
    if(elem == items.quintClicks && atShop == true && score >= 4000 && !sevenBought){
        solveFractionAddition();
        updateScore(score-4000);
        multiplier=multiplier*5;
        items.quintClicks.setText("SOLD OUT!");
        sevenBought = true;
    }
    if(elem == items.maxClicker && atShop == true && score >= eightCost){
        solveDecimalAddition();
        updateScore(score-eightCost);
        numEight = numEight + 1;
        eightCost = eightCost * 2;
        items.maxClicker.setText("Max Clicker $" + eightCost);
    }
    if(elem == maxClicks && atShop == true && score >= 10000 && !nineBought){
        solveFractionAddition();
        updateScore(score-10000);
        multiplier=multiplier*10;
        items.maxClicks.setText("SOLD OUT!");
        nineBought = true;
    }
}

function hover(e){
    if(elem.type == 'Text') {
        elem.setColor(Color.BLACK);
    }
    elem = getElementAt(e.getX(), e.getY());
    if(elem.type == 'Text' && elem != txt && elem !=answerTxt && elem != questionTxt && elem != titleText) {
        elem.setColor(Color.CYAN);
    }
}

//it adds the items when you go to the shop
function addItemsToCanvas() {
    for(var name in items) {
        add(items[name]);
    }
}

//no shop? no items
function removeItemsFromCanvas() {
    for(var name in items) {
        remove(items[name]);
    }
    remove(txt);
    remove(ball);
}
function goToBall(){
    if(atShop == true){
    removeItemsFromCanvas();
    add(ball);
    add(txt);
    atShop = false;
    atBall = true;
    shopSong.pause();
    lobbySong.play();
    lobbySong.loop = true;
    }
}
//controls go to shop controls and screen goes to shop screen
function goToShop(e) {
    remove(ball);
    remove(txt);
    addItemsToCanvas();
    atShop = true;
    atBall = false;
    lobbySong.pause();
    shopSong.play();
    shopSong.loop = true;
    add(shopRect);
    add(shopText);
    add(homeRect);
    add(homeText);
}

//these numbered variables are the autoclickers
function one(){
    updateScore(score + 1 * numOne); 
    txt.setText("Money: " + score);
    txt.setPosition(
        (getWidth() - txt.getWidth()) / 2,
        150
    );
}
function two(){
    updateScore(score + 4 * numTwo);
    txt.setText("Money: " + score);
    txt.setPosition(
        (getWidth() - txt.getWidth()) / 2,
        150
    );
}
function six(){
    updateScore(score + 30 * numSix);
    txt.setText("Money: " + score);
    txt.setPosition(
        (getWidth() - txt.getWidth()) / 2,
        150
    );
}
function eight(){
    updateScore(score + 100 * numEight);
    txt.setText("Money: " + score);
    txt.setPosition(
        (getWidth() - txt.getWidth()) / 2,
        150
    );
}

//makes you solve a multiplication problem
function solveMultiplication(){
    var numOne = Randomizer.nextInt(2, 12);
    var numTwo = Randomizer.nextInt(2, 12);
    answer = numOne * numTwo
    var question = "What is " + numOne + " times " + numTwo +"?";
    goToMath(question);
}

//decimal addition
function solveDecimalAddition(){
    var numOne = Randomizer.nextInt(1, 9);
    var numTwo = Randomizer.nextInt(10, 19);
    var numThree = Randomizer.nextInt(1, 9);
    var numFour = Randomizer.nextInt(1, 9);
    var numFive = numOne + numThree/10;
    var numSix = numTwo + numFour/10;
    answer = numFive + numSix;
    var question = "What is " + numFive + " plus " + numSix + "?";
    goToMath(question);
}

//fraction addition
function solveFractionAddition(){
    var numOne = Randomizer.nextInt(1, 10);
    var numTwo = Randomizer.nextInt(2, 10);
    var numThree = Randomizer.nextInt(1, 10);
    var numFive = numOne + numThree;
    var numSix = numTwo;
    for (var i = 10; i > 1; i--) {
        if(numFive % i == 0 && numSix % i == 0){
            numFive = numFive / i;
            numSix = numSix / i;
        }
    }
    answer = numFive + "/" + numSix; 
    var question = "What is " + numOne + "/" + numTwo + " plus " + numThree + "/" + numTwo + "? (Simplify if possible.)";
    goToMath(question);
}

//takes you to a math screen to solve math
function goToMath(question){
    removeItemsFromCanvas();
    questionTxt.setText(question);
    add(questionTxt);
    add(answerTxt);
    atShop = false;
    atBall = false;
    keyDownMethod(type);
    remove(shopRect);
    remove(shopText);
    remove(homeRect);
    remove(homeText);
    remove(homeText);
}

function type(e){
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        if(e.keyCode == Keyboard.letter(number)){
            responseTxt = responseTxt + number;
            answerTxt.setText(responseTxt);
        }
    }
    if(e.keyCode == 191){
        responseTxt = responseTxt + "/";
        answerTxt.setText(responseTxt);
    }
    if(e.keyCode == 190){
        responseTxt = responseTxt + ".";
        answerTxt.setText(responseTxt);
    }
    
    if(e.keyCode == Keyboard.ENTER){
        if(responseTxt < answer + 0.01 && responseTxt > answer - 0.01 || responseTxt == answer){
            remove(questionTxt);
            remove(answerTxt);
            answerTxt.setText("");
            responseTxt = "";
            chaChing.play();
            goToShop(e);
            keyDownMethod(goToShop);
        }
    }
    if(e.keyCode == Keyboard.BACKSPACE){
        responseTxt = "";
        answerTxt.setText("");
    }
}

function title(){
    titleText = new Text("Math Clicker", "50pt Arial");
    titleText.setPosition(getWidth()/2-titleText.getWidth()/2, getHeight()/4);
    add(titleText);
    newText = new Text("New game", "30pt Arial");
    newText.setPosition(getWidth()/2-newText.getWidth()/2, getHeight()/2+getHeight()/4);
    add(newText);
    continueText = new Text("Continue", "30pt Arial");
    continueText.setPosition(getWidth()/2-continueText.getWidth()/2, getHeight()/2+getHeight()/4+getHeight()/8);
    add(continueText);
}

//sets stuff up
function start() {
    ball = new Circle(40); // WebImage("assets/antzcircle.png");
    add(ball);
    title();
    rectColor = new Color(150, 150, 150)
    shopRect = new Rectangle(getWidth()/2, 50);
    shopRect.setPosition(0, 0);
    shopRect.setColor(rectColor);
    homeRect = new Rectangle(getWidth()/2, 50);
    homeRect.setPosition(getWidth()/2, 0);
    homeRect.setColor(rectColor);
    shopText = new Text("Shop", "30pt Arial");
    shopText.setPosition(getWidth()/8, 40);
    homeText = new Text("Home", "30pt Arial");
    homeText.setPosition(getWidth()/2 + getWidth()/8, 40);
    lobbySong = new Audio("https://codehs.com/uploads/377139db115f3698f4fe39d4dcd5640b");
    lobbySong.play();
    lobbySong.loop = true;
    shopSong = new Audio("https://codehs.com/uploads/439f154704a802e7e9aa11baf07a555b");
    chaChing = new Audio("https://codehs.com/uploads/43ddfb3a7869ca80bc4b841e098f4375");
    clickSound = new Audio("https://codehs.com/uploads/909b1a775659da951e33f5c5f05716e5")
    //change to score = getCookieScore for saving
    score = 0;
    multiplier = 1;
    atShop = false;
    atBall = false;
    numOne = 0;
    numTwo = 0;
    numSix = 0;
    numEight = 0;
    oneCost = 10;
    twoCost = 200;
    sixCost = 2000;
    eightCost = 8000;
    threeBought = false;
    fourBought = false;
    picklesBought = false;
    sevenBought = false;
    nineBought = false;
    mouseMoveMethod(hover);
    items["autoClicker"] = new Text("Auto Clicker $" + oneCost, "30pt Arial");
    items["superClicker"] = new Text("Super Clicker $" + twoCost, "30pt Arial");
    items["doubleClicks"] = new Text("Double Clicks $500", "30pt Arial");
    items["tripleClicks"] = new Text("Triple Clicks $1000", "30pt Arial");
    items["pickles"] = new Text("Pickles $100000", "30pt Arial");
    items["ultraClicker"] = new Text("Ultra Clicker $" + sixCost, "30pt Arial");
    items["quintClicks"] = new Text("Quint Clicks $4000", "30pt Arial");
    items["maxClicker"] = new Text("Max Clicker $" + eightCost, "30pt Arial");
    items["maxClicks"] = new Text("Max Clicks $10000", "30pt Arial");
    items.autoClicker.setPosition(10, 90)
    items.superClicker.setPosition(10, 140);
    items.doubleClicks.setPosition(10, 190);
    items.tripleClicks.setPosition(10, 240);
    items.pickles.setPosition(10, 290);
    items.ultraClicker.setPosition(10, 340);
    items.quintClicks.setPosition(10, 390);
    items.maxClicker.setPosition(10, 440);
    items.maxClicks.setPosition(10, 490);
    questionTxt = new Text("a", "15pt Arial");
    answerTxt = new Text("", "18pt Arial");
    questionTxt.setPosition(10, 100);
    answerTxt.setPosition(10, 200);
    responseTxt = "";
    ball.setPosition(getWidth()/2, getHeight()/2);
    mouseClickMethod(click);
    txt = new Text("Money: " + score, "30pt Arial")
    txt.setPosition(120, 150);
    setTimer(one, 200);
    setTimer(two, 200);
    setTimer(six, 200);
    setTimer(eight, 200);
}