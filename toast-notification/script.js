const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const skyChanger = document.querySelector(".skyChanger");
btn.addEventListener("click", () => {
    createNotification();
    ChangeBackgroundImg();
    getRandomColor();
});

function createNotification() {
    const notify = document.createElement('div');
    notify.classList.add('toast');

    const randomtext = getRandoemText();
    notify.innerHTML = randomtext;

    getRandomColor(notify);
    container.appendChild(notify); 

    setTimeout(() =>{
        notify.remove();
    },1000);
}
function getRandomColor(notify){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    randomcolor = `rgb(${red}, ${green}, ${blue})`;
    notify.style.backgroundColor = randomcolor;
}

function getRandoemText(){
    const texts = [
        "Learn, Grow, Succeed",
        "Dream, Believe, Achieve",
        "Create, Explore, Discover",
        "Inspire, Motivate, Empower",
        "Laugh, Love, Live",
        "Imagine, Innovate, Inspire"
    ];
    
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}
function ChangeBackgroundImg(){
    const image = [
        `url('sky1.jpg')`,
        `url('sky2.jpg')`,
        `url('sky3.jpg')`,
        `url('sky4.jpg')`,
        `url('sky5.jpg')`,
        `url('sky6.jpg')`,
        `url('sky7.jpg')`,
    ];
    const randomimageNum = Math.floor(Math.random() * image.length);
    skyChanger.style.backgroundImage = image[randomimageNum];
}