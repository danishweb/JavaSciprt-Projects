const color = ["red", "blue", "green", "cyan", "#FF5733","#71392D", "#C57665", "#65C58A", "#65BAC5", "#A765C5", "#3D9D8D", "#F9E739", "#F9E739", "#3392A1"];

const button = document.getElementById('btn');


function change_color() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = color[randomNumber];
};



function getRandomNumber(){
    //It will provide a number between 0 - 14
    return Math.floor(Math.random()*color.length);    
};