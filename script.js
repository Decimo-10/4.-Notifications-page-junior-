const markRead = document.querySelector(".header__mark-read");/* Store reference to "Mark all read" */
const unreadMes = document.querySelectorAll(".notif--unread");/* Unread messages */
const notifPoints = document.querySelectorAll(".notif__point");/* Small red dots in the unread messages */
const notifNum = document.querySelector(".header__notif-number");/* Notification counter at the top*/
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
