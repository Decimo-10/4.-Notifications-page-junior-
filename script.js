const markRead = document.querySelector(".header__mark-read");
const unreadMes = document.querySelectorAll(".notif--unread");
const notifPoints = document.querySelectorAll(".notif__point");
const notifNum = document.querySelector(".header__notif-number");
console.log(unreadMes);
markRead.addEventListener("click", () =>{
    for(const mes of unreadMes){
        mes.style.backgroundColor = "initial";
    }
    for(const point of notifPoints){
        point.remove();
    }
    notifNum.textContent = "0";
});