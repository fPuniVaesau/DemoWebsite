let title = document.querySelector(".big__header");


let randomArr = ["Life", "Health", "Happiness"];


let changeTitle = () => {
    let randomNum = Math.floor(Math.random()*3);
    title.innerHTML = randomArr[randomNum];
    return
}

setInterval(changeTitle, 7000);